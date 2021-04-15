export interface Pair {
  message: string
  name: string
}

export class Message {
  welcome(props: Pair): string {
    return `${props.message} ${props.name}`
  }
}

const message = new Message()
console.log(message.welcome({ message: 'Hello', name: 'Bob' }))
