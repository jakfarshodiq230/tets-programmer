# Soal Pertama sampai dengan Soal Kelima

## Soal Pertama

Buatlah function `randomNumber()` yang menampilkan 5 angka random dari 1 s/d 100 dengan ketentuan sebagai berikut: 
- Angka yang tampil adalah kelipatan 5.
- Jika angka yang tampil <= 60, maka tampilkan tulisan “Kurang” di belakang angka tersebut.
- Jika angka yang tampil > 60 dan <= 70, maka tampilkan tulisan “Cukup” di belakang angka tersebut.
- Jika angka yang tampil > 70 dan <= 80, maka tampilkan tulisan “Baik” di belakang angka tersebut.
- Jika angka yang tampil > 80, maka tampilkan tulisan “Luar Biasa” di belakang angka tersebut.

**Contoh Output:**
- 65 kurang
- 80 baik
- 100 luar biasa
- 90 luar biasa
- 30 kurang

---

## Soal Kedua

Terdapat seekor katak yang ingin melompati tiang setinggi X-unit. Katak tersebut dapat melakukan 2 jenis loncatan:
- Loncatan kecil sebesar 1-unit.
- Loncatan besar sebesar 3-unit.

Buatlah sebuah function `katakLoncat()` yang menentukan berapa total loncatan yang dilakukan katak untuk mencapai puncak tiang.

**Contoh Soal:**
- Input: `katakLoncat(28)` → Output: 9 Loncatan Besar dan 1 Loncatan Kecil.
- Input: `katakLoncat(60)` → Output: 20 Loncatan Besar dan 0 Loncatan Kecil.

**Limitasi:**
- Tinggi tiang merupakan bilangan bulat positif.

---

## Soal Ketiga

Buatlah sebuah project React yang dapat men-generate gambar avatar dengan memanfaatkan layanan Robohash (https://robohash.org/). 

**Alur Kerja:**
1. User dapat memasukkan random teks ke dalam textbox input.
2. Gambar avatar akan muncul setelah user menekan tombol.

**Nilai Tambah:**
- Terapkan debounce function pada search input.
- Query hanya dieksekusi ketika inputan sudah lebih dari 3 karakter.

---

## Soal Keempat

Tambahkan di bawahnya sebuah tombol yang berisi modal untuk menampilkan kumpulan lelucon dari Joke API (https://github.com/15Dkatz/official_joke_api). 

**Detail:**
- Tampilkan dalam bentuk Card Bootstrap.
- Lengkapi dengan tombol "Reload" untuk merefresh halaman.

**Endpoint API:**
```
GET https://safe-falls-22549.herokuapp.com/random_joke
```

---

## Soal Kelima

Lengkapi sebuah React App berisi function berikut sehingga berjalan sesuai fungsinya dan mendapatkan hasil return yang sesuai pada saat submit.

```jsx
import React, { useState } from 'react';

const UserProfileForm = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: '',
            email: '',
            age: '',
            address: {
                street: '',
                city: '',
                country: '',
            },
        },
    ]);

    const handleChange = (userId, e) => {
        const { name, value } = e.target;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, [name]: value } : user
            )
        );
    };

    const handleAddressChange = (userId, e) => {
        const { name, value } = e.target;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId
                    ? { ...user, address: { ...user.address, [name]: value } }
                    : user
            )
        );
    };

    const addNewUser = () => {
        setUsers((prevUsers) => [
            ...prevUsers,
            {
                id: prevUsers.length + 1,
                name: '',
                email: '',
                age: '',
                address: {
                    street: '',
                    city: '',
                    country: '',
                },
            },
        ]);
    };

    const removeUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted users:', users);
    };

    return (
        <form onSubmit={handleSubmit}>
            {users.map((user) => (
                <div
                    key={user.id}
                    style={{
                        marginBottom: '20px',
                        border: '1px solid #ccc',
                        padding: '10px',
                    }}
                >
                    <h3>User ID: {user.id}</h3>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={(e) => handleChange(user.id, e)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={(e) => handleChange(user.id, e)}
                        />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={user.age}
                            onChange={(e) => handleChange(user.id, e)}
                        />
                    </div>

                    <h4>Address</h4>
                    <div>
                        <label>Street:</label>
                        <input
                            type="text"
                            name="street"
                            value={user.address.street}
                            onChange={(e) => handleAddressChange(user.id, e)}
                        />
                    </div>
                    <div>
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={user.address.city}
                            onChange={(e) => handleAddressChange(user.id, e)}
                        />
                    </div>
                    <div>
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={user.address.country}
                            onChange={(e) => handleAddressChange(user.id, e)}
                        />
                    </div>

                    <button type="button" onClick={() => removeUser(user.id)}>
                        Remove User
                    </button>
                </div>
            ))}

            <button type="button" onClick={addNewUser}>
                Add New User
            </button>
            <button type="submit">Save All Users</button>
        </form>
    );
};

export default UserProfileForm;
```
