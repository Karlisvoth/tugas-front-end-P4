        // Menunggu seluruh halaman HTML dimuat sebelum menjalankan JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. Ambil elemen yang dibutuhkan
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const submitButton = document.getElementById('submitButton');

            // 2. Tambahkan 'event listener' (pendengar aksi) pada tombol
            submitButton.addEventListener('click', function() {
                // Aksi yang dijalankan ketika tombol di-klik:

                // 3. Ambil nilai (value) dari setiap input
                const namaDepan = firstNameInput.value;
                const namaBelakang = lastNameInput.value;

                // 4. Gabungkan nama dan tampilkan di console log
                const namaLengkap = `${namaDepan} ${namaBelakang}`;
                
                // 5. Cetak ke log
                console.log(`Nama Lengkap : ${namaLengkap}`);
            });
        });
