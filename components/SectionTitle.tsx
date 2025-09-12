import styles from "@/styles/SectionTitle.module.css";

interface Props {
    title: string;
}

export default function SectionTitle({ title }: Props) {
    return <h2 className={styles.sectionTitle}>{title}</h2>;
}