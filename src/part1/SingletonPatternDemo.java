package src.part1;

public class SingletonPatternDemo {
	public static void main(String[] args) {
		//illegal construct
		//Compile time Error: The contructor SingleObject() is not visible
		//SingleObject object =new SingleObject();
		
		//Get the only object available
		
		SingleObject object = SingleObject.getInstance();
		
		//show the message
		
		object.showMessage();
	}
}
