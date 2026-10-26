(() => {
  'use strict';
  const content = window.siteContent;
  if (!content?.en || !content?.zh) return;
  const storageKey = 'zk-homepage-language';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  function applyLanguage(language, remember = true) {
    const data = content[language];
    if (!data) return;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = data.meta.title;
    document.querySelector('meta[name="description"]').content = data.meta.description;
    document.querySelectorAll('[data-ui]').forEach(node => { node.textContent = data.ui[node.dataset.ui]; });
    document.querySelectorAll('[data-profile]').forEach(node => { node.textContent = data.profile[node.dataset.profile]; });
    document.querySelector('.image.avatar').setAttribute('aria-label', data.ui.home);
    document.querySelector('.image.avatar img').alt = language === 'zh' ? '康梓堃的个人照片' : 'Portrait of Zikun Kang';
    document.querySelector('.language-control').setAttribute('aria-label', data.ui.language);
    document.querySelector('.site-nav').setAttribute('aria-label', data.ui.navigation);
    document.querySelector('.profile-socials').setAttribute('aria-label', data.ui.profileLinks);
    document.querySelectorAll('[data-social]').forEach(link => {
      const label = data.ui.socials[link.dataset.social];
      link.setAttribute('aria-label', label);
      link.title = label;
    });
    document.querySelectorAll('[data-language]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
    document.getElementById('publication-list').innerHTML = data.publications.map(item => {
      const authors = escape(item.authors).replace('Kang, Z.', '<strong>Kang, Z.</strong>');
      return `<article class="publication"><div class="publication-heading"><h3><a href="https://doi.org/${escape(encodeURI(item.doi))}" target="_blank" rel="noopener noreferrer" aria-label="${escape(item.title)} (${escape(data.ui.newTab)})">${escape(item.title)} <span class="external-mark" aria-hidden="true">↗</span></a></h3><span class="publication-year">${escape(item.year)}</span></div><p class="publication-authors">${authors}</p><p class="publication-meta">${escape(item.journal)}</p></article>`;
    }).join('');
    document.getElementById('experience-list').innerHTML = data.experience.map(item => {
      const description = item.description.map(paragraph => `<p class="entry-description">${escape(paragraph)}</p>`).join('');
      const images = item.images ?? [];
      const columns = images.map(image => `minmax(0,${(image.width / image.height).toFixed(5)}fr)`).join(' ');
      const figures = images.map(image => `<figure class="research-figure"><a class="research-image-link" href="${escape(image.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(image.caption)} (${escape(data.ui.viewImage)}; ${escape(data.ui.newTab)})"><img src="${escape(image.src)}" width="${image.width}" height="${image.height}" alt="${escape(image.alt)}" loading="lazy" decoding="async"></a></figure>`).join('');
      return `<article class="experience"><div class="entry-heading"><h3 class="entry-title">${escape(item.title)}</h3><p class="entry-date">${escape(item.date)}</p></div>${description}${figures ? `<div class="research-gallery" style="--research-columns:${columns}">${figures}</div>` : ''}</article>`;
    }).join('');
    document.getElementById('education-list').innerHTML = data.education.map(item => `<article class="education"><div class="entry-heading"><div><h3 class="entry-title">${escape(item.title)}</h3><p class="entry-place">${escape(item.place)}</p></div><p class="entry-date">${escape(item.date)}</p></div></article>`).join('');
    document.getElementById('service-list').innerHTML = data.service.map(journal => `<li>${escape(journal)}</li>`).join('');
    document.getElementById('honors-list').innerHTML = data.honors.map(item => `<li class="honor"><span>${escape(item.title)}</span><span class="entry-date">${escape(item.years)}</span></li>`).join('');
    document.getElementById('life-gallery').innerHTML = data.lifePhotos.map(photo => `<figure class="life-photo"><a class="life-image-link" href="${escape(photo.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(photo.caption)} (${escape(data.ui.viewImage)}; ${escape(data.ui.newTab)})"><img src="${escape(photo.src)}" width="${photo.width}" height="${photo.height}" alt="${escape(photo.alt)}" loading="lazy" decoding="async"></a><figcaption>${escape(photo.caption)}</figcaption></figure>`).join('');
    if (remember) { try { localStorage.setItem(storageKey, language); } catch (_) { /* The selected language still works without storage. */ } }
  }

  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
  let language = 'en';
  const requested = new URLSearchParams(location.search).get('lang');
  if (requested === 'en' || requested === 'zh') language = requested;
  else { try { const saved = localStorage.getItem(storageKey); if (saved === 'en' || saved === 'zh') language = saved; } catch (_) { /* English is the default. */ } }
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  applyLanguage(language, false);
})();
