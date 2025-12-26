import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' }
    });
    setLoading(false);
    alert('Заявка отправлена');
  };

  return (
    <section className="form">
      <h2>Связаться с приютом</h2>
      <form onSubmit={submit}>
        <input placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} />
        <button disabled={loading}>{loading ? 'Отправка...' : 'Отправить'}</button>
      </form>
    </section>
  );
}
