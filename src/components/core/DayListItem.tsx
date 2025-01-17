import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type DayListItemProps = {
  day: number;
};

export default function DayListItem({ day }: DayListItemProps) {
  return (
    <Link href={`/(days)/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
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
    fontFamily: 'AmaticSCBold',
  },
});
