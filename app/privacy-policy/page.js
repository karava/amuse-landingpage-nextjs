export const metadata = {
  title: "Privacy and policy",
};

function page() {
  return (
    <div className="mx-auto mb-10 mt-6 max-w-[1200px] border-b border-primary-700 bg-primary-800 px-5 pb-16 text-primary-100 lg:mb-16 lg:mt-14">
      <h1 className="mb-3 text-5xl font-bold lg:mb-14 xl:text-7xl">
        Privacy Policy for Amuse
      </h1>

      <strong className="mb-4 inline-block">Last updated: 18 March 2024</strong>
      <p className="mb-4 font-medium">
        At AVA Consulting, we are committed to protecting the privacy and
        security of our users. This privacy policy outlines how we handle any
        information related to your use of the Amuse app and its services.
      </p>

      <h2 className="mb-2 bg-secondary-heading-gradient bg-clip-text text-3xl font-bold text-transparent lg:mb-5 xl:text-5xl">
        No Personal Data Collection
      </h2>

      <p className="mb-4 font-medium">
        Amuse does not collect or store any personal data from its users. We
        have designed our app with your privacy in mind, ensuring that you can
        enjoy our services without the need to share personal information.
      </p>
      <h2 className="mb-2 bg-secondary-heading-gradient bg-clip-text text-3xl font-bold text-transparent lg:lg:mb-5 xl:text-5xl">
        Contact Us
      </h2>
      <p className="mb-4 font-medium">
        Should you have any questions about this privacy policy or our
        practices, or if you have any privacy-specific concerns, we encourage
        you to contact us:
      </p>

      <ul className="mb-2 flex list-disc flex-col gap-1 pl-8 lg:mb-5">
        <li>Via the contact form on our website: avaconsult.org</li>
        <li>Through the settings menu of the Amuse app</li>
      </ul>
      <p className="mb-4 font-medium">
        Our team is dedicated to addressing your inquiries and providing the
        necessary support.
      </p>
      <h2 className="mb-2 bg-secondary-heading-gradient bg-clip-text text-3xl font-bold text-transparent lg:lg:mb-5 xl:text-5xl">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4 font-medium">
        AVA Consulting reserves the right to modify this privacy policy at any
        time. Any changes will be posted on this page with an updated revision
        date. We encourage users to regularly review our privacy policy to stay
        informed about our practices.
      </p>
      <p className="mb-4 font-medium">
        By using the Amuse app, you acknowledge and agree to this privacy policy
        and any updates.
      </p>
      <h2 className="mb-2 bg-secondary-heading-gradient bg-clip-text text-3xl font-bold text-transparent lg:lg:mb-5 xl:text-5xl">
        Compliance with Laws and Regulations
      </h2>
      <p className="mb-4 font-medium">
        AVA Consulting is committed to complying with all applicable laws and
        regulations regarding data protection and privacy. Since we do not
        collect personal information, our app is designed to inherently respect
        privacy laws and user rights.
      </p>
    </div>
  );
}

export default page;
