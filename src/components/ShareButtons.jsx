// src/components/ShareButtons.jsx
export default function ShareButtons({ url }) {
  return (
    <div>
      <a href={`https://wa.me/?text=${url}`} target="_blank">WhatsApp</a>
      <a href={`https://twitter.com/share?url=${url}`} target="_blank">Twitter</a>
      <a href={`https://facebook.com/sharer/sharer.php?u=${url}`} target="_blank">Facebook</a>
    </div>
  );
}
