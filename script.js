function generateMotivation() {
    const motivations = [
        "Bersikaplah positif dalam setiap situasi.",
        "Tetap fokus pada tujuanmu.",
        "Kegagalan hanyalah kesempatan untuk memulai lagi dengan cerdas.",
        "Sukses bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan.",
        "Jadilah sumber inspirasi bagi orang lain.",
        "Tetap konsisten dalam usaha dan kerja kerasmu.",
        "Setiap langkah kecil menuju tujuan adalah kemajuan.",
        "Percayalah pada dirimu sendiri, kamu lebih kuat daripada yang kamu pikirkan.",
        "Kesuksesan dimulai dengan langkah pertama, jadi bergeraklah!",
        "Jangan pernah menyerah pada mimpi-mimpi besar.",
        "Ketika satu pintu kesempatan tertutup, pintu lain akan terbuka.",
        "Jadilah pelajar sepanjang hidupmu.",
        "Kemajuan dimulai dengan keputusan untuk menjadi lebih baik setiap harinya.",
        "Sesuatu yang sulit bukanlah alasan untuk menyerah, tapi adalah tantangan untuk menjadi lebih baik.",
        "Bermimpilah setinggi langit, karena jika kamu jatuh, kamu akan mendarat di antara bintang-bintang.",
        "Rintangan adalah bagian dari perjalanan menuju sukses.",
        "Keberanian adalah kunci untuk membuka pintu kesuksesan.",
        "Setiap masalah adalah peluang untuk tumbuh dan berkembang.",
        "Kamu mampu melakukan lebih dari yang kamu pikirkan.",
        "Keberhasilan adalah hasil dari tekad yang kuat dan kerja keras yang konsisten.",
        "Jangan takut gagal, takutlah jika kamu tidak pernah mencoba.",
        "Bertindaklah sekarang, karena momen ini adalah yang paling tepat.",
        "Penting untuk merayakan pencapaian kecil di sepanjang perjalananmu.",
        "Jadilah seperti pohon bambu yang tetap kokoh meski diterpa badai.",
        "Jika kamu bisa bermimpi itu, kamu bisa mencapainya.",
        "Keberhasilan dimulai dengan tekad untuk mencoba.",
        "Kamu adalah arsitek dari takdirmu sendiri.",
        "Berhentilah berbicara, mulailah bertindak.",
        "Lihatlah kegagalan sebagai kesempatan untuk memulai lagi dengan cerdas.",
        "Setiap detik adalah kesempatan baru untuk merubah hidupmu.",
        "Kegigihanmu adalah kunci kesuksesan.",
        "Jangan pernah mengabaikan kekuatan doa dan keyakinan.",
        "Kamu tidak akan pernah tahu sejauh mana kamu bisa pergi sampai kamu mencoba.",
        "Bersyukurlah untuk apa yang kamu miliki, sementara kamu mengejar apa yang kamu inginkan.",
        "Jangan terlalu fokus pada kemana kamu berada sekarang, tetapi pada ke mana kamu akan pergi.",
        "Keberhasilan dimulai dari kesempatan yang dipaksakan.",
        "Jangan takut untuk mengambil risiko, karena itulah yang membuat hidup menjadi berwarna.",
        "Setiap langkah kecil membawamu lebih dekat menuju impianmu.",
        "Semangat adalah kuncinya. Jika kamu memiliki semangat, kamu akan memiliki keberanian.",
        "Lihatlah ke dalam dirimu sendiri, kamu lebih kuat daripada yang kamu pikirkan.",
        "Kamu adalah pembuat keputusan dalam hidupmu sendiri.",
        "Belajarlah dari kemarin, hiduplah untuk hari ini, harapkan untuk besok.",
        "Keberhasilan tidak selalu tentang seberapa banyak uang yang kamu hasilkan, tapi tentang seberapa banyak pengaruh positif yang kamu berikan.",
        "Jadilah pribadi yang membuat hari lain merasa lebih baik ketika mereka bertemu denganmu.",
        "Berhentilah membicarakan tentang impianmu, dan mulailah bertindak untuk mewujudkannya.",
        "Jangan pernah menunda-nunda impianmu. Waktu terus berjalan.",
        "Jangan membandingkan dirimu dengan orang lain. Kita semua memiliki perjalanan yang berbeda.",
        "Sukses bukanlah akhir dari perjalanan, tapi awal dari petualangan yang lebih besar.",
        "Pikirkan positif dan hal-hal positif akan terjadi padamu.",
        "Cita-citamu harus lebih besar dari rasa takutmu."
    ];

    const randomIndex = Math.floor(Math.random() * motivations.length);
    const randomMotivation = motivations[randomIndex];

    document.getElementById('motivationText').textContent = randomMotivation;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color every 5 seconds (5000 milliseconds)
setInterval(() => {
    const container = document.getElementById('container');
    const randomColor = getRandomColor();
    container.style.background = `linear-gradient(45deg, ${randomColor}, ${getRandomColor()})`;
}, 5000);

// Initial background color change
const container = document.getElementById('container');
const initialColor = getRandomColor();
container.style.background = `linear-gradient(45deg, ${initialColor}, ${getRandomColor()})`;

// Generate motivation on page load
generateMotivation();
