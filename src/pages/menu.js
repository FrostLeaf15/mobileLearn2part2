import Link from 'next/link';
import styles from '../styles/menu.module.css';

const Menu = () => {
    return (
        <div className={styles["menu-container"]}>
            <h1 className={styles["judul"]}>News App</h1>
            <h2 className={styles["sub-judul"]}>Kumpulan berita harian di Indonesia</h2>

            <div className={styles["berita-utama"]}>
                <p>Update path 8.12.0</p>
            </div>

            <div className={styles["sub-berita"]}>
                <h3>Detail Halaman Lain 1</h3>
                <p>Deskripsi Detail Halaman Lain 1</p>
                <Link href="/halaman-lain-1">
                    Lihat Detail
                </Link>
            </div>

            <div className={styles["sub-berita"]}>
                <h3>Detail Halaman Lain 2</h3>
                <p>Deskripsi Detail Halaman Lain 2</p>
                <Link href="/halaman-lain-2">
                    Lihat Detail
                </Link>
            </div>
        </div>
    );
};

export default Menu;
