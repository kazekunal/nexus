import Link from 'next/link';
import React from 'react';

const TermsAndConditionsPlain = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-center">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Last updated on: 24th March 2025</p>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            These terms and conditions ("Customer Terms") constitute a binding agreement between you and Chauffit ("Company") and govern your use of our services, website, mobile application, and related materials (collectively referred to as "Offerings"). By accessing or using any or all of our Offerings, you agree to abide by these Customer Terms.
          </p>
          
          <p className="text-gray-300">
            If you do not agree with any part of these Customer Terms, you are advised to refrain from using the Offerings. Chauffit reserves the right to modify these terms at any time without prior notice, and it is the responsibility of the Customer to regularly review the terms to remain informed of updates.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Definitions</h2>
          <p className="text-gray-300">
            <strong>Account:</strong> A unique profile created by the Customer to access Chauffit services, enabling features such as bookings, payment history, and account management.<br />
            <strong>Booking:</strong> A request made by a Customer through Chauffit to engage a chauffeur for the Customer's vehicle.<br />
            <strong>Additional Fee:</strong> Extra charges such as tolls, interstate taxes, and other expenses incurred during the trip.<br />
            <strong>Cancellation Fee:</strong> Charges applied for canceling a booking under specific conditions as described in Section 10.<br />
            <strong>Chauffeur:</strong> A trained and certified professional driver assigned by Chauffit to operate the Customer's vehicle during the booking period.<br />
            <strong>Customer:</strong> Any individual who registers an account and uses Chauffit services in accordance with these terms.<br />
            <strong>Fare:</strong> The amount calculated based on the trip duration, distance, and any additional services, payable by the Customer.<br />
            <strong>Vehicle:</strong> The Customer's privately-owned vehicle, which must comply with legal and safety standards to be eligible for Chauffit services.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Eligibility</h2>
          <p className="text-gray-300">
            Customers must be at least 18 years of age to use Chauffit services.<br />
            Customers must own or have lawful possession of the vehicle for which a booking is made. Verification of vehicle ownership or authorization may be requested at any time.<br />
            The vehicle must have valid insurance and registration documents as per Indian law, and must meet applicable safety standards.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Registration and Account</h2>
          <p className="text-gray-300">
            Customers are required to provide accurate and complete registration details, including name, contact information, and vehicle details.<br />
            Customers are solely responsible for safeguarding their account credentials and promptly notifying Chauffit of any unauthorized access or breaches.<br />
            Chauffit retains the right to suspend or terminate any account found to be in violation of these terms, engaged in fraudulent activities, or creating multiple accounts without permission.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Services Provided</h2>
          <p className="text-gray-300">
            Chauffit acts as a platform facilitating the provision of professional chauffeur services to operate Customers' vehicles. The service is intended solely for personal, non-commercial use.<br />
            Availability of chauffeurs is subject to demand and location constraints. Chauffit does not guarantee service availability at all times.<br />
            Customers are responsible for ensuring that their vehicle is in good working condition prior to the chauffeur's arrival.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Insurance and Liability</h2>
          <p className="text-gray-300">
            <strong>Chauffit Insurance Add-On:</strong><br />
            Chauffit offers an optional trip insurance plan with three pricing options:<br />
            - <strong>Scratch Coverage:</strong> Covers minor scratches, capped at ₹5,000. Price: ₹79/-.<br />
            - <strong>Scratch & Dent Coverage:</strong> Covers dents and minor surface damages, capped at ₹10,000. Price: ₹99/-.<br />
            - <strong>Full Coverage:</strong> Comprehensive protection for scratches, dents, and minor damages, capped at ₹15,000. Price: ₹129/-.<br />
            Customers can choose their desired insurance category during the booking process.<br />
            Claims must be submitted within 3 days of the trip's completion, and repair invoices must be uploaded within 15 days through authorized channels.
          </p>
          
          <p className="text-gray-300">
            <strong>Exclusions:</strong><br />
            Coverage does not include wear and tear, mechanical failures, or damages to accessories, tires, or electronics.<br />
            Claims arising from illegal activities, fraud, or negligence by the Customer are not covered.
          </p>
          
          <p className="text-gray-300">
            <strong>Limitations of Liability:</strong><br />
            Chauffit assumes no liability for pre-existing damages, third-party claims, or losses exceeding ₹1,000/-.<br />
            The Customer acknowledges and agrees to indemnify Chauffit for any misuse or illegal activity involving their vehicle during the booking period.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Fees and Payment</h2>
          <p className="text-gray-300">
            The total Fare, inclusive of applicable taxes and additional fees, will be displayed prior to trip confirmation.<br />
            Payments can be made digitally through the Chauffit platform or directly to the chauffeur in cash.<br />
            Failure to complete payments may result in suspension of services or account termination.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Cancellation Policy</h2>
          <p className="text-gray-300">
            Cancellations made within 5 minutes of booking are free of charge. Cancellations beyond this period may incur a fee.<br />
            Cancellation Fees are applicable under these conditions:<br />
            - The chauffeur has arrived and waited for more than 10 minutes.<br />
            - The trip is canceled after the chauffeur has been dispatched.<br />
            The Customer will be informed of all applicable charges prior to confirming cancellation.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Customer Responsibilities</h2>
          <p className="text-gray-300">
            Customers must ensure that their vehicle meets all safety and operational requirements before the start of the trip.<br />
            Customers must be present during the trip unless otherwise agreed and documented.<br />
            Illegal or negligent use of Chauffit services, including overloading or unsafe practices, is strictly prohibited.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h2>
          <p className="text-gray-300">
            Chauffit is not liable for delays caused by external factors, including but not limited to traffic, weather conditions, or unforeseen mechanical issues.<br />
            Personal belongings left in the vehicle during the trip are the sole responsibility of the Customer.<br />
            Chauffit will not be held responsible for indirect, incidental, or consequential damages arising from the use of its services.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Termination</h2>
          <p className="text-gray-300">
            Chauffit reserves the right to terminate or suspend services at its sole discretion, particularly in cases of misuse, violation of terms, or fraudulent activities.<br />
            Customers may terminate their accounts by providing written notice and settling any outstanding payments.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Dispute Resolution</h2>
          <p className="text-gray-300">
            Disputes will be governed by the laws of India and resolved through arbitration held in Delhi NCR.<br /> 
            Customers are encouraged to seek resolution via Chauffit customer support prior to initiating formal proceedings.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Contact Us</h2>
          <p className="text-gray-300">
            For assistance or inquiries, please reach out to us at Chauffit@gmail.com or through our website. We are committed to resolving all customer concerns promptly and effectively.
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