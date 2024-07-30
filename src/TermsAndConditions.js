import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Terms & Conditions</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          By agreeing to the below terms & conditions, you are declaring that the goods being purchased from GreenHaat are not for personal consumption but for business purposes, resale, or in-house use.
        </p>
        <p className="mb-4">
          We would also request you to furnish any of the below documents:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Sales tax/ VAT registration/ service tax/ excise duty/Goods and Services Tax (GST) registration; or</li>
          <li>Trade licenses i.e. a license/ registration certificate/ membership certificate/ registration under Shops and Establishment Act, issued by a Government Authority/ Government Body/ Local Self-Government Authority, reflecting that the entity/ person holding the license/ registration certificate /membership certificate, as the case may be, is itself/ himself/ herself engaged in a business involving commercial activity; or</li>
          <li>Permits/ license etc. for undertaking retail trade (like tehbazari and similar license for hawkers) from Government Authorities/ Local Self Government Bodies; or</li>
          <li>Certificate of incorporation or registration as a society or registration as a public trust.</li>
        </ul>
        <p className="mb-4">
          Request you to email the above aforesaid documents at{' '}
          <a href="mailto:registration@greenhaat.com" className="text-blue-500 hover:underline">
            registration@greenhaat.com
          </a>{' '}
          or mail to the below address:
        </p>
        <address className="mb-4">
          GreenHaat Agro Pvt Ltd.<br />
          #132, 1st Floor, 3rd Cross,<br />
          4th Phase, Dollar Layout, J P Nagar, Bengaluru,<br />
          Karnataka, IN 560076
        </address>
      </div>
    </div>
  );
};

export default TermsAndConditions;
