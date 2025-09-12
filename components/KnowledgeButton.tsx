import Link from "next/link";
import styles from "@/styles/KnowledgeButton.module.css";

interface KnowledgeButtonProps {
  label: string;
  href: string;
}

export default function KnowledgeButton({ label, href }: KnowledgeButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {label}
    </Link>
  );
}
