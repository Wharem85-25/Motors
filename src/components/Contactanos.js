import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native'

export default function Contactanos() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const submit = () => {
		alert(`
			nombre: ${name}
		 	email: ${email}
		 	Subject: ${subject}
		 	Message: ${message}`
			)
	}

	return (
		<View style={styles.content}>
			<View style={styles.border}>
				<View style={styles.containerTitle}>
					<Text style={styles.title} >{`Need a special deal? \ncontact us`}</Text>
				</View>
				<View style={styles.contentInput}>
					<View style={styles.cont}>
						<Text style={styles.textInput}>Your name</Text>
						<TextInput
							placeholder= "Juan Fernandez"
							style={styles.input}
							autoCapitalize="none"
							defaultValue={name}
							onChangeText={newText => setName(newText)}
						/>
					</View>
					<View style={styles.cont}>
						<Text style={styles.textInput}>Your email</Text>
						<TextInput
							placeholder= "example@mail.com"
							style={styles.input}
							autoCapitalize="none"
							defaultValue={email}
							onChangeText={newText => setEmail(newText)}
						/>
					</View>
					<View style={styles.cont}>
						<Text style={styles.textInput}>Subject</Text>
						<TextInput
							placeholder= "Subject"
							style={styles.input}
							autoCapitalize="none"
							defaultValue={subject}
							onChangeText={newText => setSubject(newText)}
						/>
					</View>
				</View>
				<View style={styles.inputMessageContent}>
					<Text style={styles.textInput}>{`Your message (optional)`}</Text>
					<TextInput
						style={styles.inputMessage}
						autoCapitalize="none"
						defaultValue={message}
						onChangeText={newText => setMessage(newText)}
					/>
				</View>
				<View style={styles.contentButton}>
					<TouchableOpacity style={styles.button} onPress={submit}>
						<Text style={styles.submit}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		height: 1000,
		alignItems: "center"
	},
	border: {
		width: Platform.OS === "web" ? "40%" : "100%",
		borderColor: "#889093",
		borderWidth: 3,
		borderBottomWidth: Platform.OS === "web" ? 3 : 0,
		height: 900
	},
	containerTitle: {
		alignItems: "center"
	},
	title: {
		fontSize: 35,
		fontWeight: "bold",
		fontFamily: "rubik",
		textTransform: "uppercase",
		paddingTop: 50,
		paddingLeft: Platform.OS === "web" ? 0 : 10,
		marginBottom: Platform.OS === "web" ? 30 : 50
	},
	contentInput: {
		alignItems: "center",
		marginBottom: 20
	},
	cont: {
		marginBottom: 30,
		width: Platform.OS === "web" ? 700 : 400,
	},
	textInput: {
		fontSize: 18,
		textAlign: "left",
		paddingLeft: 20
	},
	input: {
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 20,
		backgroundColor: "#cfcfd0"
	},
	contentButton: {
		alignItems: "center"
	},
	button:{
		backgroundColor: "#0d46ff",
  	borderRadius: 20,
  	width: 250,
  	height: 50,
		paddingHorizontal: 30,
  	paddingVertical: 5,
		alignItems: "center",
		marginTop: 20,
	},
	submit: {
		fontSize: 20,
  	fontWeight: '400',
  	color: "#fff",
		textTransform: "uppercase",
		paddingTop: Platform.OS === "web" ? 10 : 5
	},
	inputMessage: {
		height: 150,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 20,
		backgroundColor: "#cfcfd0"
	},
	inputMessageContent: {
		marginLeft: 10,
		marginRight: 10
	}
})
