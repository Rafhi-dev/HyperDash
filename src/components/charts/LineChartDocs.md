## Dokumentasi Komponen `MyLineChart`

Komponen `MyLineChart` adalah komponen React yang dapat digunakan kembali untuk merender grafik garis (line charts) menggunakan Chart.js. Komponen ini dirancang untuk menyederhanakan pembuatan grafik garis dengan menyediakan serangkaian props yang mudah dikonfigurasi untuk kasus penggunaan umum, sambil tetap memungkinkan kustomisasi tingkat lanjut.

### Dependensi

* React
* Chart.js (`chart.js`)
* React Chart.js 2 (`react-chartjs-2`)

Pastikan Anda telah menginstal dependensi ini dalam proyek Anda:
`npm install chart.js react-chartjs-2`
atau
`yarn add chart.js react-chartjs-2`

### Props Komponen

Berikut adalah daftar props yang dapat Anda gunakan untuk mengonfigurasi komponen `MyLineChart`:

#### 1. Data Konfigurasi

| Prop             | Tipe                                                                                                                                                                                             | Wajib?   | Deskripsi                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labels`         | `string[]`                                                                                                                                                                                       | Ya       | Array string yang merepresentasikan label pada sumbu X (misalnya, bulan, minggu, kategori).                                                                                                                                                                                                                                                                                                                                 |
| `datasetsConfig` | `Array<Object>`                                                                                                                                                                                  | Ya       | Array objek, di mana setiap objek mengonfigurasi satu set data (satu garis pada grafik). Setiap objek dalam array dapat memiliki properti berikut:<ul><li>`label` (string, wajib): Nama dataset, akan muncul di legenda dan tooltip.</li><li>`data` (number[], wajib): Array angka yang merupakan nilai data untuk dataset ini.</li><li>`color` (string, wajib): Warna garis dan titik utama (misalnya, `'rgba(75,192,192,1)'`, `'#4CAF50'`).</li><li>`fill` (boolean \| string, opsional, default: `true`): Menentukan apakah area di bawah garis harus diisi warna. Bisa berupa `true`, `false`, `'start'`, `'end'`, `'origin'`. Jika `false`, `backgroundColor` akan transparan.</li><li>`tension` (number, opsional, default: `0.1`): Kelengkungan garis Bezier. `0` untuk garis lurus.</li><li>`pointColor` (string, opsional, default: nilai `color`): Warna isi titik data.</li><li>`pointBorderColor` (string, opsional, default: `'#fff'`): Warna border titik data.</li><li>`pointHoverRadius` (number, opsional, default: `7`): Radius titik data saat di-hover.</li><li>`pointHoverBgColor` (string, opsional, default: `'#fff'`): Warna isi titik data saat di-hover.</li><li>`pointHoverBorderColor` (string, opsional, default: nilai `color`): Warna border titik data saat di-hover.</li></ul> |

#### 2. Presentasi Grafik

| Prop                   | Tipe                | Wajib?   | Default     | Deskripsi                                                                                                                             |
| :--------------------- | :------------------ | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `titleText`            | `string`            | Tidak    | `''`        | Teks judul yang akan ditampilkan di atas grafik. Jika kosong, judul tidak ditampilkan.                                                |
| `xAxisLabel`           | `string`            | Tidak    | `''`        | Label untuk sumbu X. Jika kosong, label tidak ditampilkan.                                                                            |
| `yAxisLabel`           | `string`            | Tidak    | `''`        | Label untuk sumbu Y. Jika kosong, label tidak ditampilkan.                                                                            |
| `yTicksCallback`       | `(value) => string` | Tidak    | `undefined` | Fungsi callback untuk memformat label tick pada sumbu Y. Menerima nilai tick dan mengembalikan string yang diformat.                  |
| `tooltipLabelCallback` | `(context) => string`| Tidak    | `undefined` | Fungsi callback untuk memformat konten label dalam tooltip. Menerima objek `context` dari Chart.js.                                   |
| `legendPosition`       | `string`            | Tidak    | `'top'`     | Posisi legenda. Pilihan: `'top'`, `'bottom'`, `'left'`, `'right'`, `'chartArea'`.                                                        |
| `beginAtZero`          | `boolean`           | Tidak    | `true`      | Jika `true`, sumbu Y akan dimulai dari nol. Set `false` jika Anda ingin sumbu Y menyesuaikan dengan rentang data minimum dan maksimum. |

#### 3. Layout & Styling

| Prop                 | Tipe     | Wajib?   | Default                                       | Deskripsi                                                                                                                                          |
| :------------------- | :------- | :------- | :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `containerClassName` | `string` | Tidak    | `"w-full md:w-3/4 lg:w-1/2 mx-auto"`          | Kelas CSS Tailwind (atau lainnya) untuk elemen `div` pembungkus luar grafik. Kelas dasar (`bg-white p-4 rounded-lg shadow`) selalu diterapkan. |
| `chartHeight`        | `string` | Tidak    | `'40vh'`                                      | Tinggi dari kontainer grafik (elemen `div` yang langsung membungkus `<Line />`).                                                                  |
| `minChartHeight`     | `string` | Tidak    | `'100px'`                                     | Tinggi minimum dari kontainer grafik.                                                                                                              |

#### 4. Kustomisasi Lanjutan

| Prop            | Tipe     | Wajib?   | Default     | Deskripsi                                                                                                                                                                              |
| :-------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customOptions` | `object` | Tidak    | `undefined` | Objek konfigurasi Chart.js. Opsi yang disediakan di sini akan digabungkan (deep merge) dengan opsi default atau yang dihasilkan dari props sederhana, dengan `customOptions` lebih prioritas. |

### Contoh Penggunaan

#### 1. Penggunaan Dasar (Satu Dataset)

```jsx
import MyLineChart from './MyLineChart';

function SalesChart() {
  const salesLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'];
  const salesData = [
    {
      label: 'Penjualan Bulanan',
      data: [120, 150, 110, 180, 160],
      color: 'rgb(54, 162, 235)', // Biru
      fill: true,
      tension: 0.3
    }
  ];

  return (
    <div className="my-8">
      <MyLineChart
        labels={salesLabels}
        datasetsConfig={salesData}
        titleText="Grafik Penjualan Produk A"
        xAxisLabel="Bulan"
        yAxisLabel="Jumlah Terjual"
        containerClassName="w-full max-w-2xl mx-auto" // Mengatur lebar kontainer
        chartHeight="300px"
      />
    </div>
  );
}

export default SalesChart;