package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.utils.JsonDataFileReader;

@RestController
public class ProjectRestController {
	@Autowired
	private JsonDataFileReader fileReader;
	
	
	@RequestMapping("/projectDetails")
	public String getProjectDetails(){
		return fileReader.readJsonDataFromFile("projectDetails.txt");
		
	}
	@RequestMapping("/notifications")
	public String getEmployee(){
		return fileReader.readJsonDataFromFile("stubbedData/notifications.txt");		
	}

}
