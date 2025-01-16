import { View, Text, StyleSheet } from 'react-native';

type DayListItemProps = {
  day: number;
};

export default function DayListItem({ day }: DayListItemProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#F9EDE3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
  },
  text: {
    fontSize: 70,
    color: '#9b4521',
  },
});
