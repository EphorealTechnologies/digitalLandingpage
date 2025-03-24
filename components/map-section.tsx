export default function MapSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#0a014f] mb-6">Our Location</h2>
      <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5506499532!2d79.8!3d11.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0x7f45c2ecb81c9b6!2sPuducherry%2C%20India!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ephoreal Technologies Office Location"
        ></iframe>
      </div>
    </div>
  )
}

