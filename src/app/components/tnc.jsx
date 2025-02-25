import Link from 'next/link';
import React from 'react';

const TermsAndConditionsPlain = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-center">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Last updated on 24-02-2025 17:43:49</p>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding agreement by and between VARUN AGARWAL, ("Website Owner" or "we" or "us" or "our") and you ("you" or "your") and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, "Services"). By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy).
          </p>
          
          <p className="text-gray-300">
            We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates. The use of this website or availing of our Services is subject to the following terms of use:
          </p>
          
          <p className="text-gray-300">
            To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
          </p>
          
          <p className="text-gray-300">
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </p>
          
          <p className="text-gray-300">
            Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
          </p>
          
          <p className="text-gray-300">
            The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents. You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
          </p>
          
          <p className="text-gray-300">
            You agree to pay us the charges associated with availing the Services.
          </p>
          
          <p className="text-gray-300">
            You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
          </p>
          
          <p className="text-gray-300">
            You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
          </p>
          
          <p className="text-gray-300">
            You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services. You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.
          </p>
          
          <p className="text-gray-300">
            Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
          </p>
          
          <p className="text-gray-300">
            These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India. All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Gurgaon, HARYANA
          </p>
          
          <p className="text-gray-300">
            All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
          </p>
        </div>
        
        <div className="mt-8 text-center">
            <Link href="/">
          <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Back to Website
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPlain;