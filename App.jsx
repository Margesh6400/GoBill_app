import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const dummyData = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    image:
      'https://images.unsplash.com/photo-1603415526960-f0b2a8f29c7c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    email: 'fiona.g@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'George Miller',
    email: 'george.miller@example.com',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Hannah Baker',
    email: 'hannah.b@example.com',
    image:
      'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Isaac Newton',
    email: 'isaac.newton@example.com',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    image:
      'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    image:
      'https://images.unsplash.com/photo-1603415526960-f0b2a8f29c7c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    email: 'fiona.g@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'George Miller',
    email: 'george.miller@example.com',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Hannah Baker',
    email: 'hannah.b@example.com',
    image:
      'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Isaac Newton',
    email: 'isaac.newton@example.com',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    image:
      'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    image:
      'https://images.unsplash.com/photo-1603415526960-f0b2a8f29c7c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    email: 'fiona.g@example.com',
    image:
      'https://images.unsplash.com/photo-1502767089025-6572583495cc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'George Miller',
    email: 'george.miller@example.com',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Hannah Baker',
    email: 'hannah.b@example.com',
    image:
      'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Isaac Newton',
    email: 'isaac.newton@example.com',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    image:
      'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?q=80&w=1974&auto=format&fit=crop',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 50 }}
              source={{ uri: item.image }}
            />
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}

        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        numColumns={2}
        columnWrapperStyle={{gap: 10}}
        extraData={dummyData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
