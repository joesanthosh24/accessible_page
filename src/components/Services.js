import styles from "./services-component.module.css";

import Service from "./Service";

export default function ServicesComponent({ services }) {
  return (
    <div className={`${styles.servicesContainer} container`}>
      <Service service={services.empathy} />
      <Service service={services.inspirational} />
      <Service service={services.usability} />
    </div>
  );
}
