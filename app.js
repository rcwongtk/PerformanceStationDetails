function playVideo(media,id,title){
 document.querySelectorAll('.media iframe').forEach(frame=>{if(frame.parentElement!==media){const parent=frame.parentElement;frame.remove();parent.classList.remove('playing');}});
 const old=media.querySelector('iframe');if(old)old.remove();
 const frame=document.createElement('iframe');
 frame.src='https://player.vimeo.com/video/'+id+'?autoplay=1&title=0&byline=0&portrait=0&dnt=1';
 frame.title=title;frame.allow='autoplay; fullscreen; picture-in-picture';frame.allowFullscreen=true;
 media.append(frame);media.classList.add('playing');
}
document.querySelectorAll('.media').forEach(media=>{const button=media.querySelector('button');button.addEventListener('click',()=>playVideo(media,media.dataset.video,media.dataset.title));});
document.querySelectorAll('.switches button').forEach(button=>button.addEventListener('click',()=>{
 const media=document.getElementById(button.dataset.target);
 button.parentElement.querySelectorAll('button').forEach(sibling=>{const active=sibling===button;sibling.classList.toggle('active',active);sibling.setAttribute('aria-pressed',String(active));});
 playVideo(media,button.dataset.id,button.dataset.label);
}));
