// Particleground Animation එක Initialize කිරීම
document.addEventListener('DOMContentLoaded', function () {
  // Pure JavaScript භාවිතයෙන් particleground run කිරීම
  if (typeof particleground === 'function') {
    particleground(document.getElementById('particles'), {
      dotColor: '#999999',
      lineColor: '#999999',
      density: 11000, // තිත් ප්‍රමාණය (වැඩි කරන්න/අඩු කරන්න පුළුවන්)
      particleRadius: 4, // තිත් වල ප්‍රමාණය
      lineWidth: 0.6, // රේඛා වල මහත
      proximity: 100, // රේඛා එකතු වන දුර
      parallax: true,
      parallaxMultiplier: 5
    });
  }
});
