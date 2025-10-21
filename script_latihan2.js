        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. Ambil elemen yang dibutuhkan
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const gradeInput = document.getElementById('numericGrade');
            const submitButton = document.getElementById('submitButton');

            /**
             * Fungsi untuk mengonversi nilai angka ke huruf.
             * (Berdasarkan rentang pada gambar, dengan koreksi pada B dan C)
             */
            function getNilaiHuruf(nilai) {
                if (isNaN(nilai) || nilai < 0 || nilai > 100) {
                    return 'Input tidak valid';
                } else if (nilai >= 85) {
                    return 'A';
                } else if (nilai >= 80) { // 80 - 84.9
                    return 'A-';
                } else if (nilai >= 75) { // 75 - 79.9
                    return 'B+';
                } else if (nilai >= 70) { // 70 - 74.9 (Koreksi dari gambar)
                    return 'B';
                } else if (nilai >= 65) { // 65 - 69.9
                    return 'B-';
                } else if (nilai >= 60) { // 60 - 64.9
                    return 'C+';
                } else if (nilai >= 55) { // 55 - 59.9 (Koreksi dari gambar)
                    return 'C';
                } else if (nilai >= 40) { // 40 - 54.9
                    return 'D';
                } else { // 0 - 39.9
                    return 'E';
                }
            }

            // 2. Tambahkan event listener pada tombol
            submitButton.addEventListener('click', function() {
                
                // 3. Ambil nilai dari input
                const namaDepan = firstNameInput.value;
                const namaBelakang = lastNameInput.value;
                // Ubah nilai input (string) menjadi angka (float)
                const nilaiAngka = parseFloat(gradeInput.value);

                // 4. Proses data
                const namaLengkap = `${namaDepan} ${namaBelakang}`;
                const nilaiHuruf = getNilaiHuruf(nilaiAngka);

                // 5. Cetak ke console log
                console.log(`Nama Lengkap : ${namaLengkap}`);
                
                // Cek jika input nilaiAngka valid sebelum menampilkannya
                if (isNaN(nilaiAngka)) {
                    console.log(`Nilai Angka       : Input kosong/salah`);
                } else {
                    console.log(`Nilai Angka       : ${nilaiAngka}`);
                }
                
                console.log(`Nilai Huruf       : ${nilaiHuruf}`);
            });
        });
