function ContactForm({closeForm}) {
  return (
    <div id="contactModal" className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-[1000]">
      <div className="bg-white p-[20px] border-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] max-w-md">
        <h2 className="text-center">Зворотній зв'язок</h2>
        <form action="https://formspree.io/f/xbdqnenz" method="POST">
            <p><label>Ім'я:<br /> <input type="text" name="name" required /></label></p>
            <p><label>Email:<br /> <input type="email" name="email" required /></label></p>
            <p><label>Телефон:<br /> <input type="tel" name="phone" required /></label></p>
            <p><label>Повідомлення:<br /> <textarea name="message" required></textarea></label></p>
            
            <button type="submit">Відправити</button>
            <button type="button" onClick={closeForm}>Закрити</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm