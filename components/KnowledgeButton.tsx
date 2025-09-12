import Link from "next/link";
import styles from "@/styles/KnowledgeButton.module.css";

interface KnowledgeButtonProps {
  label: string;
  href: string;
  onClick?: () => void;
}

export default function KnowledgeButton({ label, href, onClick }: KnowledgeButtonProps) {
  return (
    <Link href={href} className={styles.button} onClick={onClick}>
      {label}
    </Link>
  );
}
