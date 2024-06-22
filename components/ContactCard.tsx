import Image from "next/image";

type ContactProps = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  image: string;
};

const ContactCard: React.FC<ContactProps> = ({ name, email, phone, linkedin, github, image }) => {
  
  return (
    <div className="contactCard flex flex-col items-start space-x-4">
      <h1>{name}</h1>
      <div className="flex items-start space-x-4">
        <Image src={image} width={96} height={96} alt={name} className="w-24 h-24 rounded" />
        <div>
          <dl>
            <div>
              <dt >Email</dt>
              <dd>
                <a href={`mailto:${email}`} >{email}</a>
              </dd>
            </div>
            <div>
              <dt >Phone</dt>
              <dd>{phone}</dd>
            </div>
            <div>
              <dt >LinkedIn</dt>
              <dd><a href={`https://www.linkedin.com/in/${linkedin}`} >{linkedin}</a></dd>
            </div>
            <div>
              <dt >GitHub</dt>
              <dd><a href={`https://github.com/${github}`} >{github}</a></dd>
            </div>
          </dl>
        </div>
        <Image src="/groat.svg" width={96} height={96} alt="Groat" className="w-24 h-24 rounded" />
      </div>
    </div>
  );
};

export default ContactCard;
