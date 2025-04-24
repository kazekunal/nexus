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

          <h2 className="text-xl font-bold mt-6 mb-3">1. Definitions</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>1.1. Account: A unique profile created by the Customer to access Chauffit services, enabling features such as bookings, payment history, and account management.</p>
            <p>1.2. Booking: A request made by a Customer through Chauffit to engage a chauffeur for the Customer's vehicle.</p>
            <p>1.3. Additional Fee: Extra charges such as tolls, interstate taxes, and other expenses incurred during the trip.</p>
            <p>1.4. Cancellation Fee: Charges applied for canceling a booking under specific conditions as described in Section 10.</p>
            <p>1.5. Chauffeur: A trained and certified professional driver assigned by Chauffit to operate the Customer's vehicle during the booking period.</p>
            <p>1.6. Customer: Any individual who registers an account and uses Chauffit services in accordance with these terms.</p>
            <p>1.7. Fare: The amount calculated based on the trip duration, distance, and any additional services, payable by the Customer.</p>
            <p>1.8. Vehicle: The Customer's privately-owned vehicle, which must comply with legal and safety standards to be eligible for Chauffit services.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">2. Eligibility</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>2.1. Customers must be at least 18 years of age to use Chauffit services.</p>
            <p>2.2. Customers must own or have lawful possession of the vehicle for which a booking is made. Verification of vehicle ownership or authorization may be requested at any time.</p>
            <p>2.3. The vehicle must have valid insurance and registration documents as per Indian law, and must meet applicable safety standards.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">3. Registration and Account</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>3.1. Customers are required to provide accurate and complete registration details, including name, contact information, and vehicle details.</p>
            <p>3.2. Customers are solely responsible for safeguarding their account credentials and promptly notifying Chauffit of any unauthorized access or breaches.</p>
            <p>3.3. Chauffit retains the right to suspend or terminate any account found to be in violation of these terms, engaged in fraudulent activities, or creating multiple accounts without permission.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">4. Services Provided</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>4.1. Chauffit acts as a platform facilitating the provision of professional chauffeur services to operate Customers' vehicles. The service is intended solely for personal, non-commercial use.</p>
            <p>4.2. Availability of chauffeurs is subject to demand and location constraints. Chauffit does not guarantee service availability at all times.</p>
            <p>4.3. Customers are responsible for ensuring that their vehicle is in good working condition prior to the chauffeur's arrival.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">5. Insurance and Liability</h2>
          <p className="text-gray-300">
            <strong>Chauffit Insurance Add-On:</strong>
          </p>
          <p className="text-gray-300">Chauffit offers an optional trip insurance plan with three pricing options:</p>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>5.1. <strong>Scratch Coverage:</strong> Covers minor scratches, capped at ₹5,000. Price: ₹79/-.</p>
            <p>5.2. <strong>Scratch & Dent Coverage:</strong> Covers dents and minor surface damages, capped at ₹10,000. Price: ₹99/-.</p>
            <p>5.3. <strong>Full Coverage:</strong> Comprehensive protection for scratches, dents, and minor damages, capped at ₹15,000. Price: ₹129/-.</p>
            <p>5.4. Customers can choose their desired insurance category during the booking process.</p>
            <p>5.5. Claims must be submitted within 3 days of the trip's completion, and repair invoices must be uploaded within 15 days through authorized channels.</p>
          </div>

          <p className="text-gray-300 mt-4">
            <strong>Exclusions:</strong>
          </p>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>5.6. Coverage does not include wear and tear, mechanical failures, or damages to accessories, tires, or electronics.</p>
            <p>5.7. Claims arising from illegal activities, fraud, or negligence by the Customer are not covered.</p>
          </div>

          <p className="text-gray-300 mt-4">
            <strong>Limitations of Liability:</strong>
          </p>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>5.8. Chauffit assumes no liability for pre-existing damages, third-party claims, or losses exceeding ₹1,000/-.</p>
            <p>5.9. The Customer acknowledges and agrees to indemnify Chauffit for any misuse or illegal activity involving their vehicle during the booking period.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">6. Fees and Payment</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>6.1. The total Fare, inclusive of applicable taxes and additional fees, will be displayed prior to trip confirmation.</p>
            <p>6.2. Payments can be made digitally through the Chauffit platform or directly to the chauffeur in cash.</p>
            <p>6.3. Failure to complete payments may result in suspension of services or account termination.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">7. Cancellation Policy</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>7.1. Cancellations made within 5 minutes of booking are free of charge. Cancellations beyond this period may incur a fee.</p>
            <p>7.2. Cancellation Fees are applicable under these conditions:</p>
            <div className="pl-6 space-y-1 mt-1">
              <p>7.2.1. The chauffeur has arrived and waited for more than 10 minutes.</p>
              <p>7.2.2. The trip is canceled after the chauffeur has been dispatched.</p>
            </div>
            <p>7.3. The Customer will be informed of all applicable charges prior to confirming cancellation.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">8. Customer Responsibilities</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>8.1. Customers must ensure that their vehicle meets all safety and operational requirements before the start of the trip.</p>
            <p>8.2. Customers must be present during the trip unless otherwise agreed and documented.</p>
            <p>8.3. Illegal or negligent use of Chauffit services, including overloading or unsafe practices, is strictly prohibited.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">9. Limitation of Liability</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>9.1. Chauffit is not liable for delays caused by external factors, including but not limited to traffic, weather conditions, or unforeseen mechanical issues.</p>
            <p>9.2. Personal belongings left in the vehicle during the trip are the sole responsibility of the Customer.</p>
            <p>9.3. Chauffit will not be held responsible for indirect, incidental, or consequential damages arising from the use of its services.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">10. Termination</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>10.1. Chauffit reserves the right to terminate or suspend services at its sole discretion, particularly in cases of misuse, violation of terms, or fraudulent activities.</p>
            <p>10.2. Customers may terminate their accounts by providing written notice and settling any outstanding payments.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">11. Dispute Resolution</h2>
          <div className="text-gray-300 pl-6 space-y-2">
            <p>11.1. Disputes will be governed by the laws of India and resolved through arbitration held in Delhi NCR.</p>
            <p>11.2. Customers are encouraged to seek resolution via Chauffit customer support prior to initiating formal proceedings.</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">12. Contact Us</h2>
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