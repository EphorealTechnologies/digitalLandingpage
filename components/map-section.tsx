export default function MapSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#0a014f] mb-6">Our Location</h2>
      <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.9395618591375!2d79.80452207482293!3d11.909294588316834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361890f0b23ff%3A0xea688f80c013ac13!2sEphoreal%20Technologies!5e0!3m2!1sen!2sin!4v1743147786882!5m2!1sen!2sin"
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

