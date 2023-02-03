import styles from './layout.module.css';

export default function NewLayout({ children }){
    return (
        <div className={styles.newcontainer} >Nested Layout sample {children}</div>
    )
}
