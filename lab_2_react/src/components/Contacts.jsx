function Contacts() {
  return (
    <section className="mb-10">
      <h2 className="text-base uppercase tracking-widest mb-4 border-b-2 border-purple-300 pb-2 font-bold text-gray-800">Контакти</h2>
      <ul className="space-y-4 text-sm text-gray-700">
          <li>
            <strong className="block text-gray-900">Email:</strong> 
            <a href="mailto:m.hlynka@proton.me" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200">m.hlynka@proton.me</a>
          </li>
          <li>
            <strong className="block text-gray-900">Телефон:</strong> 
            <a href="tel:+380684485771" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200">+380 68 448 57 71</a>
          </li>
          <li>
            <strong className="block text-gray-900">GitHub:</strong> 
            <a href="https://github.com/x4d47" target="_blank" rel="noreferrer" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200">github.com/x4d47</a>
          </li>
      </ul>
    </section>
  )
}

export default Contacts