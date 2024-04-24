const Footer = () => {
  return (
    <footer className="px-4 md:bg-white md:py-6 md:px-6 xl:py-12 xl:px-14">
      <div className="justify-between gap-2 md:flex">
        <div className="md:max-w-xs">
          <h3 className="text-2xl font-bold text-primary-blue">MOSA-RENT</h3>
          <p className="my-1 text-xs text-custom-grey md:text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="my-4 grid max-w-xl flex-1 grid-cols-2 gap-5 gap-y-6 self-end sm:grid-cols-3">
          <div>
            <h4 className="mb-1 font-semibold text-custom-black">About</h4>
            <ul className="list-none">
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>How it works</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Featured</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Partnership</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Business Relation</a>
              </li>
            </ul>
          </div>
          <div className="mx-auto sm:mx-0">
            <h4 className="mb-1 font-semibold text-custom-black">Socials</h4>
            <ul className="list-none">
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Discord</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Instagram</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Twitter</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-custom-black">Community</h4>
            <ul className="list-none">
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Events</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Blog</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Podcast</a>
              </li>
              <li className="my-1 text-xs font-medium text-custom-grey md:text-sm">
                <a>Invite a Friend</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-t border-custom-grey py-6 text-xs sm:flex-row-reverse md:text-sm">
        <div className="flex max-w-sm justify-between gap-5">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className="flex-1 self-start">
          <p>©{new Date().getFullYear()} MOSA-RENT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
