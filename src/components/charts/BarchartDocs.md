## Dokumentasi Komponen `MyBarChart`

Komponen `MyBarChart` adalah komponen React yang dapat digunakan kembali untuk merender grafik batang (bar charts) menggunakan Chart.js. Komponen ini dirancang untuk menyederhanakan pembuatan grafik batang dengan menyediakan serangkaian props yang mudah dikonfigurasi.

### Dependensi

* React
* Chart.js (`chart.js`)
* React Chart.js 2 (`react-chartjs-2`)

Pastikan dependensi ini terinstal: `npm install chart.js react-chartjs-2` atau `yarn add chart.js react-chartjs-2`.

### Props Komponen

#### 1. Data Konfigurasi

| Prop             | Tipe            | Wajib? | Deskripsi                                                                                                                                                                                                                                                                                          |
| :--------------- | :-------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labels`         | `string[]`      | Ya     | Array string untuk label pada sumbu kategori (sumbu X untuk bar vertikal, sumbu Y untuk bar horizontal).                                                                                                                                                                                           |
| `datasetsConfig` | `Array<Object>` | Ya     | Array objek, setiap objek mengonfigurasi satu set data (satu grup bar). Properti objek:<ul><li>`label` (string, wajib): Nama dataset (legenda, tooltip).</li><li>`data` (number[], wajib): Nilai data.</li><li>`color` (string, wajib): Warna utama untuk `backgroundColor` bar (misalnya, `'rgba(75,192,192,0.7)'`).</li><li>`borderColor` (string, opsional, default: nilai `color`): Warna border bar.</li><li>`borderWidth` (number, opsional, default: `1`): Lebar border bar.</li></ul> |

#### 2. Presentasi Grafik

| Prop                   | Tipe                  | Wajib? | Default     | Deskripsi                                                                                                                                                             |
| :--------------------- | :-------------------- | :----- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `titleText`            | `string`              | Tidak  | `''`        | Judul grafik.                                                                                                                                                         |
| `xAxisLabel`           | `string`              | Tidak  | `''`        | Label untuk sumbu X. (Sumbu kategori jika `indexAxis='x'`, sumbu nilai jika `indexAxis='y'`).                                                                        |
| `yAxisLabel`           | `string`              | Tidak  | `''`        | Label untuk sumbu Y. (Sumbu nilai jika `indexAxis='x'`, sumbu kategori jika `indexAxis='y'`).                                                                        |
| `yTicksCallback`       | `(value) => string`   | Tidak  | `undefined` | Fungsi callback untuk memformat label tick pada sumbu nilai. (Sumbu Y jika `indexAxis='x'`, sumbu X jika `indexAxis='y'`).                                             |
| `tooltipLabelCallback` | `(context) => string` | Tidak  | `undefined` | Fungsi callback untuk memformat konten label dalam tooltip.                                                                                                             |
| `legendPosition`       | `string`              | Tidak  | `'top'`     | Posisi legenda (`'top'`, `'bottom'`, `'left'`, `'right'`, `'chartArea'`).                                                                                              |
| `beginAtZero`          | `boolean`             | Tidak  | `true`      | Jika `true`, sumbu nilai akan dimulai dari nol.                                                                                                                       |
| `indexAxis`            | `string`              | Tidak  | `'x'`       | Orientasi grafik. `'x'` untuk bar vertikal (default), `'y'` untuk bar horizontal.                                                                                      |

#### 3. Layout & Styling

| Prop                 | Tipe     | Wajib? | Default                              | Deskripsi                                                                                                                                         |
| :------------------- | :------- | :----- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `containerClassName` | `string` | Tidak  | `"w-full md:w-3/4 lg:w-1/2 mx-auto"` | Kelas CSS untuk `div` pembungkus luar. Kelas dasar (`bg-white p-4 rounded-lg shadow`) selalu diterapkan.                                           |
| `chartHeight`        | `string` | Tidak  | `'40vh'`                             | Tinggi kontainer grafik.                                                                                                                          |
| `minChartHeight`     | `string` | Tidak  | `'100px'`                            | Tinggi minimum kontainer grafik.                                                                                                                  |

#### 4. Kustomisasi Lanjutan

| Prop            | Tipe     | Wajib? | Default     | Deskripsi                                                                                                                        |
| :-------------- | :------- | :----- | :---------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `customOptions` | `object` | Tidak  | `undefined` | Objek konfigurasi Chart.js. Akan di-merge dengan opsi default, dengan `customOptions` lebih prioritas untuk kustomisasi mendalam. |

### Contoh Penggunaan

Lihat file `MyBarPrev.jsx` yang telah dibuat sebelumnya untuk contoh penggunaan yang detail, termasuk:
* Bar chart vertikal standar.
* Bar chart horizontal dengan `indexAxis="y"`.
* Kustomisasi tooltip dan ticks.
* Penggunaan `customOptions`.

#### Contoh Bar Vertikal Sederhana:

```jsx
import MyBarChart from './MyBarChart';

function SimpleSalesBarChart() {
  const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
  const datasets = [
    {
      label: 'Penjualan 2024',
      data: [1200, 1900, 1300, 1700],
      color: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    }
  ];

  return (
    <MyBarChart
      labels={labels}
      datasetsConfig={datasets}
      titleText="Total Penjualan per Kuartal"
      xAxisLabel="Kuartal"
      yAxisLabel="Total Penjualan (USD)"
      yTicksCallback={(value) => `$${value / 1000}k`}
    />
  );
}