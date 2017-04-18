package com.example.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.stereotype.Component;

@Component
public class JsonDataFileReader {
	
	public String readJsonDataFromFile(String fileName){
		String response = null;
		try {
			ClassLoader classLoader = getClass().getClassLoader();
			File file = new File(classLoader.getResource(fileName).getFile());
			FileInputStream fis = new FileInputStream(file);
			byte[] data = new byte[(int) file.length()];
			fis.read(data);
			fis.close();
			response = new String(data, "UTF-8");
		}catch(IOException e){
			e.printStackTrace();
			
		}

		return response;
	}
	
	public static void main (String arg[]){
		JsonDataFileReader reader = new JsonDataFileReader();
		System.out.println(reader.readJsonDataFromFile("projectDetails.txt"));
	}
}
