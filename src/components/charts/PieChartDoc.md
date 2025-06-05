## Dokumentasi Komponen `MyPieChart`

Komponen `MyPieChart` adalah komponen React yang dapat digunakan kembali untuk merender grafik lingkaran (Pie charts) dan Donat (Doughnut charts) menggunakan Chart.js.

### Dependensi

* React
* Chart.js (`chart.js`)
* React Chart.js 2 (`react-chartjs-2`)

Pastikan dependensi ini terinstal: `npm install chart.js react-chartjs-2` atau `yarn add chart.js react-chartjs-2`.

### Props Komponen

#### 1. Data Konfigurasi Utama

| Prop                 | Tipe       | Wajib? | Default                | Deskripsi                                                                                                                                    |
| :------------------- | :--------- | :----- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `labels`             | `string[]` | Ya     | (Contoh internal)      | Array string untuk label setiap irisan (slice) pada grafik.                                                                                  |
| `data`               | `number[]` | Ya     | (Contoh internal)      | Array angka yang merepresentasikan nilai setiap irisan, sesuai urutan `labels`.                                                              |
| `datasetLabel`       | `string`   | Tidak  | `'Dataset'`            | Label untuk dataset tunggal pada Pie chart, biasanya muncul di tooltip jika ada beberapa dataset (meski Pie chart umumnya satu dataset).       |
| `backgroundColors`   | `string[]` | Tidak  | Palet warna internal   | Array string warna (misalnya, `'rgba(255, 99, 132, 0.8)'`, `'#FFCE56'`) untuk setiap irisan. Jika tidak disediakan, palet default digunakan. |
| `borderColors`       | `string[]` | Tidak  | (Berdasarkan `backgroundColors`) | Array string warna untuk border setiap irisan. Defaultnya adalah versi lebih solid dari `backgroundColors`.                           |
| `borderWidth`        | `number`   | Tidak  | `1`                    | Lebar border untuk setiap irisan.                                                                                                            |

#### 2. Presentasi Grafik

| Prop                   | Tipe                  | Wajib? | Default                             | Deskripsi                                                                                                                               |
| :--------------------- | :-------------------- | :----- | :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `titleText`            | `string`              | Tidak  | `''`                                | Teks judul yang akan ditampilkan di atas grafik.                                                                                        |
| `legendPosition`       | `string`              | Tidak  | `'top'`                             | Posisi legenda. Pilihan: `'top'`, `'bottom'`, `'left'`, `'right'`, `'chartArea'`.                                                         |
| `tooltipLabelCallback` | `(context) => string` | Tidak  | Fungsi default (label + nilai + %) | Fungsi callback untuk memformat konten label dalam tooltip. Menerima objek `context` Chart.js.                                        |
| `cutout`               | `string \| number`    | Tidak  | `undefined`                         | Jika diisi (misalnya `'50%'` atau `50`), chart akan menjadi Doughnut chart dengan lubang tengah sebesar nilai yang diberikan.         |

#### 3. Layout & Styling

| Prop                 | Tipe     | Wajib? | Default                              | Deskripsi                                                                                                                               |
| :------------------- | :------- | :----- | :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `containerClassName` | `string` | Tidak  | `"w-full md:w-3/4 lg:w-1/2 mx-auto"` | Kelas CSS untuk elemen `div` pembungkus luar. Kelas dasar (`bg-white p-4 rounded-lg shadow`) selalu diterapkan.                        |
| `chartHeight`        | `string` | Tidak  | `'40vh'`                             | Tinggi dari kontainer grafik.                                                                                                           |
| `minChartHeight`     | `string` | Tidak  | `'250px'`                            | Tinggi minimum dari kontainer grafik.                                                                                                   |

#### 4. Kustomisasi Lanjutan

| Prop            | Tipe     | Wajib? | Default     | Deskripsi                                                                                                                            |
| :-------------- | :------- | :----- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `customOptions` | `object` | Tidak  | `undefined` | Objek konfigurasi Chart.js. Opsi ini akan digabungkan (deep merge) dengan opsi default, dengan `customOptions` memiliki prioritas lebih tinggi. |

### Contoh Penggunaan

Lihat file `MyPiePrev.jsx` yang telah dibuat sebelumnya untuk contoh penggunaan yang detail, termasuk:
* Pie chart standar.
* Doughnut chart dengan menggunakan prop `cutout`.
* Kustomisasi tooltip.
* Penggunaan `customOptions` untuk mengubah tampilan.

#### Contoh Pie Chart Sederhana:

```jsx
import MyPieChart from './MyPieChart';

function ProductShareChart() {
  const labels = ['Produk A', 'Produk B', 'Produk C'];
  const data = [45, 30, 25]; // Persentase atau jumlah
  const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <MyPieChart
      labels={labels}
      data={data}
      backgroundColors={colors}
      datasetLabel="Pangsa Pasar"
      titleText="Distribusi Pangsa Pasar Produk"
      legendPosition="bottom"
      containerClassName="max-w-sm mx-auto" // Ukuran kontainer lebih kecil
      chartHeight="300px"
    />
  );
}