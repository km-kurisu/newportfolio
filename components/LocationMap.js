const LocationMap = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-center lg:text-left dark:text-gray-200">📍 My Location</h3>
      <iframe
        // IMPORTANT: Replace this src with your actual Google Maps embed link
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.450663303519!2d72.83040967363179!3d19.229008996572674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13ac5f656c5%3A0x54d5742011c959a1!2sMHB%20Colony%2C%20Mhada%20Colony%2C%20Borivali%2C%20Mumbai%2C%20Maharashtra%20400091!5e0!3m2!1sen!2sin!4v1748167501237!5m2!1sen!2sin"
        width="100%" // Make it responsive
        height="275"
        style={{ border: 0, borderRadius: '0.75rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="max-w-[300px] w-full mx-auto lg:mx-0"
      ></iframe>
       
    </div>
  );
};

export default LocationMap;
