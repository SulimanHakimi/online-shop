import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const AboutPage = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto p-6">
        {/* About Us Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a passionate team dedicated to delivering exceptional products and services.
            Our mission is to provide high-quality, affordable, and innovative solutions to help you achieve your goals.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Our mission is to offer the best products that enhance the everyday lives of our customers. We aim to inspire confidence and creativity in everyone we serve.
          </p>
        </section>


        <section>
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Meet Our Team
          </h3>
          <div className="flex justify-center items-center">
           
            <div className="flex flex-col items-center text-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEp4qksSwNcXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731496707875?e=1741824000&v=beta&t=abF7hMg1PPIxwNPvM_BB82xZqaTgbwDl3hCOqUpdAko"
                alt="Team Member"
                className="w-28 h-28 rounded-full object-cover mb-4 shadow-lg"
              />
              <h4 className="text-lg font-semibold text-gray-800">Suliman Hakimi</h4>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
