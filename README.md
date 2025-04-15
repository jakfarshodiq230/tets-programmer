# SoalPertama sampai dengan SoalKelima

## SoalPertama

Buatlah function randomNumber() yang menampilkan 5 angka random dari 1 s/d 100. Dengan Ketentuan sebagai berikut: 
Angka yang tampil adalah kelipatan 5, 
Jika angka yang tampil <= 60 maka tampilkan tulisan “Kurang” di belakang angka tersebut, 
Jika angka yang tampil > 60 dan <= 70 maka tampilkan tulisan belakang angka tersebut. “Cukup”, 
Jika angka yang tampil > 70 dan <= 80 maka tampilkan tulisan “Baik” di belakang angka tersebut, 
Jika angka yang tampil > 80 maka tampilkan tulisan “Luar Biasa” di belakang angka tersebut, 
Contoh: 
■ 65 kurang 
■ 80 baik 
■ 100 luar biasa 
■ 90 luar biasa 
■ 30 kurang 

## SoalKedua

Terdapat seekor katak yang ingin melompati tiang setinggi X-unit. Katak tersebut dapat melakukan 2 buah jenis loncatan, loncatan kecil dan loncatan besar. Loncatan kecil sebesar 1-unit dan loncatan besar sebesar 3-unit. 
Buatlah sebuah function katakLoncat() yang menentukan berapa total loncatan yang dilakukan katak untuk mencapai ke puncak tiang. ○ 
Contoh Soal:
■ Input: katakLoncat(28) → Output: 9 Loncatan Besar dan 1 Loncatan Kecil 
■ Input: katakLoncat(60) → Output: 20 Loncatan Besar dan 0 Loncatan Kecil 
■ Limit Soal: Tinggi tiang merupakan bilangan bulat positif. 

## SoalKetiga

Buatlah sebuah project React yang dapat men-generate gambar avatar, dengan memanfaatkan layanan Robohash (https://robohash.org/). 
Robohash merupakan layanan web untuk menampilkan gambar acak (robot, monster, alien atau kucing) berdasarkan input teks.
Alur kerjanya sederhana: user dapat memasukkan random teks ke dalam textbox input, kemudian gambar avatar akan muncul usai user menekan tombol.
*nilai tambah : menerapkan debounce function pada search input dan query hanyan di eksekusi ketika inputan sudah lebih dari 3 character

## SoalKeempat

lalu tambahkan dibawahnya buton yang berisi modal yang akan menampilkan kumpulan lelucon dari Joke API (https://github.com/15Dkatz/official_joke_api). 
Tampilkan dalam bentuk Card Bootstrap, lengkap dengan tombol Reload untuk merefresh page.
GET https://safe-falls-22549.herokuapp.com/random_joke

## SoalKelima

//Lengkapi buat sebuah react App berisi Function Handle berikut sehingga berjalan sesuai fungsinya dan mendapatkan hasil return yang sesuai pada saat submit


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

  };


  const handleAddressChange = (userId, e) => {
      };


  const addNewUser = () => {
      };


  const removeUser = (userId) => {

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //nilai plus jika dibuat ui list namun sampai data tampil di console sudah bagus
    console.log('Submitted users:', users);
  };

  return (
    <form onSubmit={handleSubmit}>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
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


