document.addEventListener('DOMContentLoaded', function () {
  // 1. Particleground Background එක ක්‍රියාත්මක කිරීම
  if (typeof particleground === 'function') {
    particleground(document.getElementById('particles'), {
      dotColor: '#999999',
      lineColor: '#999999',
      density: 12000,        // තිත් විසිරී පවතින ප්‍රමාණය (අඩු වැඩි කරන්න පුළුවන්)
      particleRadius: 3.5,   // තිත් වල ප්‍රමාණය
      lineWidth: 0.5,        // සම්බන්ධ වන රේඛා වල මහත
      proximity: 110,        // රේඛා එකිනෙක යා වන දුර
      parallax: true,        // Mouse එක හොලවද්දී 3D effect එකක් දීමට
      parallaxMultiplier: 5
    });
  }

  // 2. ඔයාගේ Custom Cursor එක සඳහා වන මූලික Logic එක (තිබුණේ නම්)
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  if(cursor && follower) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(function() {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }, 50);
    });
  }
});
