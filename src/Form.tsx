import React, { FC, createRef } from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";
import { useContainerQuery } from "./useContainerQuery";

export const Form: FC = () => {
  const ref = createRef<HTMLFormElement>();
  const sizeClassName = useContainerQuery(ref, [
    { className: styles.m, max: 600 },
    { className: styles.l, min: 600 }
  ]);
  return (
    <form className={classNames(styles.container, sizeClassName)} ref={ref}>
      <input
        type="text"
        placeholder="First name"
        className={styles.firstName}
      />
      <input type="text" placeholder="Last name" className={styles.lastName} />
      <input
        type="date"
        placeholder="Date of birth"
        className={styles.dateOfBirth}
      />
      <input type="number" placeholder="Age" className={styles.age} />
      <input type="text" placeholder="Street" className={styles.street} />
      <input type="text" placeholder="Number" className={styles.number} />
      <input type="text" placeholder="Post Code" className={styles.postCode} />
      <input type="text" placeholder="City" className={styles.city} />
      <input type="text" placeholder="Country" className={styles.country} />
      <input type="text" placeholder="Language" className={styles.language} />
      <input
        type="text"
        placeholder="Profession"
        className={styles.profession}
      />
      <input
        type="text"
        placeholder="Nationality"
        className={styles.nationality}
      />
      <input type="text" placeholder="Status" className={styles.status} />
    </form>
  );
};
