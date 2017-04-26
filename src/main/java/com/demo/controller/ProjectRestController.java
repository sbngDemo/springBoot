package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.utils.JsonDataFileReader;

@RestController
public class ProjectRestController {
	@Autowired
	private JsonDataFileReader fileReader;
	
	
	@RequestMapping("/projectDetails")
	public String getProjectDetails(){
		return fileReader.readJsonDataFromFile("stubbedData/projectDetails.txt");
		
	}
	@RequestMapping("/notifications")
	public String getEmployee(){
		return fileReader.readJsonDataFromFile("stubbedData/notifications.txt");		
	}

}
