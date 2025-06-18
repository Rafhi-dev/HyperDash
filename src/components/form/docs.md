

## 1. `Input`

Komponen input teks umum dengan label, error handling, dan dukungan disabled.

### Props

| Nama          | Tipe       | Default  | Deskripsi                          |
| ------------- | ---------- | -------- | ---------------------------------- |
| `type`        | `string`   | `"text"` | Jenis input (`text`, `email`, dll) |
| `label`       | `string`   | `-`      | Label input                        |
| `id`          | `string`   | `-`      | ID input                           |
| `name`        | `string`   | `-`      | Nama input                         |
| `placeholder` | `string`   | `-`      | Placeholder                        |
| `value`       | `string`   | `-`      | Nilai input                        |
| `onChange`    | `function` | `-`      | Fungsi saat berubah                |
| `error`       | `string`   | `-`      | Teks error                         |
| `disabled`    | `boolean`  | `false`  | Nonaktifkan input                  |
| `className`   | `string`   | `""`     | Kelas tambahan                     |

### Contoh Penggunaan

```jsx
import Input from './Input';

<Input
  label="Nama Lengkap"
  name="nama"
  id="nama"
  placeholder="Masukkan nama"
  value={nama}
  onChange={(e) => setNama(e.target.value)}
  error={errorNama}
/>
```

---

## 2. `Password`

Input khusus password dengan fitur show/hide menggunakan ikon mata dari FontAwesome.

### Props

(Sama seperti `Input`)

### Contoh Penggunaan

```jsx
import PasswordInput from './Password';

<PasswordInput
  label="Kata Sandi"
  name="password"
  id="password"
  placeholder="Masukkan kata sandi"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  error={errorPassword}
/>
```

> **Catatan:** Pastikan sudah install:
>
> ```bash
> npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
> ```

---

## 3. `TextArea`

Textarea untuk input multi-baris.

### Props

| Nama                        | Tipe     | Default | Deskripsi                  |
| --------------------------- | -------- | ------- | -------------------------- |
| `rows`                      | `number` | `3`     | Jumlah baris awal textarea |
| (lainnya sama dengan Input) |          |         |                            |

### Contoh Penggunaan

```jsx
import Area from './HyArea';

<Area
  label="Deskripsi"
  name="deskripsi"
  placeholder="Masukkan deskripsi"
  value={deskripsi}
  onChange={(e) => setDeskripsi(e.target.value)}
  rows={5}
/>
```

---

## 4. `Radio`

Komponen radio group dengan tampilan vertikal atau horizontal.

### Props

| Nama            | Tipe       | Default      | Deskripsi                              |
| --------------- | ---------- | ------------ | -------------------------------------- |
| `options`       | `array`    | `[]`         | Daftar pilihan (value, label, dll)     |
| `selectedValue` | `string`   | `-`          | Nilai terpilih                         |
| `onChange`      | `function` | `-`          | Handler perubahan                      |
| `direction`     | `string`   | `"vertical"` | Posisi radio (`vertical`/`horizontal`) |

### Contoh Penggunaan

```jsx
import Radio from './Radio';

<Radio
  label="Jenis Kelamin"
  name="gender"
  selectedValue={gender}
  onChange={(e) => setGender(e.target.value)}
  direction="horizontal"
  options={[
    { value: "laki", label: "Laki-laki" },
    { value: "perempuan", label: "Perempuan" },
  ]}
/>
```

---

## 5. `Select`

Dropdown list dengan label dan error message.

### Props

| Nama                         | Tipe    | Deskripsi                 |
| ---------------------------- | ------- | ------------------------- |
| `options`                    | `array` | Daftar `{ value, label }` |
| (lainnya sama seperti Input) |         |                           |

### Contoh Penggunaan

```jsx
import Select from './Select';

<Select
  label="Pilih Negara"
  name="negara"
  value={negara}
  onChange={(e) => setNegara(e.target.value)}
  options={[
    { value: "id", label: "Indonesia" },
    { value: "my", label: "Malaysia" },
    { value: "sg", label: "Singapura" }
  ]}
/>
```

---

## 6. `CheckBox`

Checkbox tunggal dengan label.

### Props

| Nama                    | Tipe      | Deskripsi      |
| ----------------------- | --------- | -------------- |
| `checked`               | `boolean` | Status centang |
| (lainnya seperti Input) |           |                |

### Contoh Penggunaan

```jsx
import CheckBox from './CheckBox';

<CheckBox
  label="Saya menyetujui syarat dan ketentuan"
  name="terms"
  value="yes"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

---


