// ==UserScript==
// @name        Get SEO tags
// @namespace   getSEOTags
// @description Display list of SEO tags
// @include     *//localhost*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
"use strict";

if (self == top) {
  var metas, links, blockSEOTags, tagsList, i, metasLen, linksLen, name, property, content, rel, href, styles = '', css = document.createElement('style');

  blockSEOTags = document.createElement('div');
  blockSEOTags.setAttribute('class', 'block-seo-tags');

  tagsList = '<ul id="getSEOTagsListId_5d4fg6s5dfh84ju78i4yk84j68h4es68g4se68">';

  metas = Array.prototype.slice.call(document.getElementsByTagName('meta'));
  metasLen = metas.length;
  if (metasLen > 0) {
    tagsList += '<li>Metas</li>';
    tagsList += '<ul class="metas-len">';
    for (i = 0 ; i < metasLen; ++i) {
      name = metas[i].getAttribute('name');
      property = metas[i].getAttribute('property');
      content = metas[i].getAttribute('content');
      if (name !== null && content !== null) {
        tagsList += '<li><b>' + name + '</b> = ' + content + '</li>';
      }
      if (property !== null && content !== null) {
        tagsList += '<li><b>' + property + '</b> = ' + content + '</li>';
      }
    }
    tagsList += '</ul>';
  }

  links = Array.prototype.slice.call(document.getElementsByTagName('link'));
  linksLen = links.length;
  if (linksLen > 0) {
    tagsList += '<li>Links</li>';
    tagsList += '<ul class="links-len">';
    for (i = 0 ; i < linksLen; ++i) {
      rel = links[i].getAttribute('rel');
      href = links[i].getAttribute('href');
      if (
        rel !== null &&
        (
          rel === 'canonical' ||
          rel === 'shortlink' ||
          rel === 'publisher' ||
          rel === 'author' ||
          rel === 'prev' ||
          rel === 'next' ||
          rel === 'alternate'
        ) &&
        href !== null
      ) {
        tagsList += '<li><b>' + rel + '</b> = ' + href + '</li>';
      }
    }
    tagsList += '</ul>';
  }

  tagsList += '</ul>';

  blockSEOTags.innerHTML = "<strong onclick=\"document.getElementById('getSEOTagsListId_5d4fg6s5dfh84ju78i4yk84j68h4es68g4se68').style.display==='none' ? document.getElementById('getSEOTagsListId_5d4fg6s5dfh84ju78i4yk84j68h4es68g4se68').style.display='block' : document.getElementById('getSEOTagsListId_5d4fg6s5dfh84ju78i4yk84j68h4es68g4se68').style.display='none'\">SEO Tags:</strong>";
  blockSEOTags.innerHTML += tagsList;

  document.body.appendChild(blockSEOTags);

  styles = (function () {/*
  .block-seo-tags {
    position: absolute;
    top: 30px;
    left: 15px;
    background: rgb(43,43,43);
    color: rgb(255, 198, 109);
    padding: 5px 10px;
    font-size: 1.1em;
    max-width: 400px;
    z-index: 1000;
  }
  .metas-len,
  .links-len {
    margin: 0;
    padding: 0 0 0 15px;
  }
  .block-seo-tags strong {
    cursor: pointer;
  }
  .block-seo-tags b {
    text-decoration: underline;
  }
  #getSEOTagsListId_5d4fg6s5dfh84ju78i4yk84j68h4es68g4se68 {
    margin: 0;
    padding: 0 0 0 15px;
  }*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

  css.appendChild(document.createTextNode(styles));
  document.head.appendChild(css);
}

})();
