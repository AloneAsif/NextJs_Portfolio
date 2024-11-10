import { FC } from "react";

interface ContactCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  imageUrl: string;
}

const ContactCard: FC<ContactCardProps> = ({
  name,
  title,
  email,
  phone,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <div className="text-center mx-4 md:mx-40 lg:mx-48">
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-[#EB8317]">
          CONTACT
        </h1>
      </div>
      
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img
          className="w-full h-48 object-contain"
          src={imageUrl}
          alt={name}
        />

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-md text-gray-600">{title}</p>

          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-500">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="text-indigo-600">
                {email}
              </a>
            </p>
            <p className="text-sm text-gray-500">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phone}`} className="text-indigo-600">
                {phone}
              </a>
            </p>
            <p className="text-sm text-gray-500">
              <strong>Github:</strong>{" "}
              <a
                href="https://github.com/AloneAsif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600"
              >
                GitHub Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
