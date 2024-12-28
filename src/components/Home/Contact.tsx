import { useIntl } from 'react-intl';

export function Contact() {
  const intl = useIntl();

  return (
    <section className="bg-[#1B1E32] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#8A6FF9] text-sm uppercase">
              {intl.formatMessage({ id: 'home.contact.label' })}
            </span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4 leading-tight">
              {intl.formatMessage({ id: 'home.contact.title' })}{' '}
              <span className="text-[#8A6FF9]">
                {intl.formatMessage({ id: 'home.contact.highlight' })}
              </span>{' '}
              {intl.formatMessage({ id: 'home.contact.titleEnd' })}
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              {intl.formatMessage({ id: 'home.contact.description' })}
            </p>

            <div className="flex items-center gap-4">
              <div className="bg-[#8A6FF9]/20 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#8A6FF9]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white">+55 21 9999-9999</div>
              </div>
            </div>
          </div>

          <div className="bg-[#2A2D45] p-8 rounded-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={intl.formatMessage({ id: 'home.contact.form.name' })}
                  className="w-full bg-[#0A0B1A] rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A6FF9]/50"
                />
                <input
                  type="email"
                  placeholder={intl.formatMessage({ id: 'home.contact.form.email' })}
                  className="w-full bg-[#0A0B1A] rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A6FF9]/50"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder={intl.formatMessage({ id: 'home.contact.form.phone' })}
                  className="w-full bg-[#0A0B1A] rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A6FF9]/50"
                />
                <select 
                  className="w-full bg-[#0A0B1A] rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A6FF9]/50 appearance-none"
                >
                  <option value="" className="bg-[#0A0B1A]">
                    {intl.formatMessage({ id: 'home.contact.form.subject' })}
                  </option>
                  <option value="support" className="bg-[#0A0B1A]">
                    {intl.formatMessage({ id: 'home.contact.form.subjects.support' })}
                  </option>
                  <option value="sales" className="bg-[#0A0B1A]">
                    {intl.formatMessage({ id: 'home.contact.form.subjects.sales' })}
                  </option>
                  <option value="other" className="bg-[#0A0B1A]">
                    {intl.formatMessage({ id: 'home.contact.form.subjects.other' })}
                  </option>
                </select>
              </div>
              <textarea
                rows={6}
                placeholder={intl.formatMessage({ id: 'home.contact.form.message' })}
                className="w-full bg-[#0A0B1A] rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A6FF9]/50 resize-none"
              />
              <button
                type="submit"
                className="bg-[#8A6FF9] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#7559E8] transition-colors"
              >
                {intl.formatMessage({ id: 'home.contact.form.submit' })}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 