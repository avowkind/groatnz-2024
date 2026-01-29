/* eslint-disable @next/next/no-img-element */

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
    <div className="contactCard flex flex-col items-start space-x-4 pt-4 pb-6">
      <h1 className="text-2xl md:text-3xl font-light text-slate-700 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>{name}</h1>
      <div className="flex items-start space-x-4">
        <img src={image} width={96} height={96} alt={`${name} photo`} className="hidden md:block w-24 h-24 rounded" />
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
      </div>
    </div>
  );
};

export default ContactCard;
