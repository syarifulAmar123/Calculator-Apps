import React, {useState} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {backSpace, Ulang} from './assets';

const App = () => {
  const [hasil, setHasil] = useState(0);

  const tambah = value => {
    if (hasil == 0) {
      setHasil(value);
    } else {
      setHasil(hasil + '' + value);
    }
  };

  const akhir = () => {
    setHasil(eval(hasil));
  };

  const ulang = () => {
    setHasil(0);
  };

  const hapus = () => {
    setHasil(prevHasil => {
      if (prevHasil.length > 0) {
        return prevHasil.slice(0, -1);
      } else {
        return 0;
      }
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#0a3d62'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#0a3d62'} />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          margin: 20,
          justifyContent: 'center',
          marginLeft: -20,
          alignItems: 'flex-end',
        }}
        onPress={() => ulang()}>
        <Image source={Ulang} style={{width: 25, height: 25}} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          marginHorizontal: 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 52,
            textAlign: 'right',
            marginTop: -70,
            color: 'black',
            fontWeight: '400',
          }}>
          {hasil}
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 22,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah('(')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              (
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 22, paddingHorizontal: 20}}
            onPress={() => tambah(')')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 22, paddingHorizontal: 20}}
            onPress={() => tambah('/')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              /
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 22,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah('*')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              x
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah(7)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(8)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(9)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah('+')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
              marginTop: 15,
            }}
            onPress={() => tambah(4)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
              marginTop: 15,
            }}
            onPress={() => tambah(5)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
              marginTop: 15,
            }}
            onPress={() => tambah(6)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah('-')}>
            <Text style={{fontSize: 50, fontWeight: 'bold', color: '#ccae62'}}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah(1)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(2)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(3)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => hapus()}>
            <Image source={backSpace} style={{width: 25, height: 25}} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => tambah('%')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(0)}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20, paddingHorizontal: 20}}
            onPress={() => tambah(',')}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#d2dae2'}}>
              ,{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => akhir()}>
            <Text style={{fontSize: 29, fontWeight: 'bold', color: '#ccae62'}}>
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
