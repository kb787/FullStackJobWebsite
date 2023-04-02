package com.example.SeekerController;


import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.VariableOperators.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SeekerModel.SeekerModelClass;
import com.example.SeekerRepository.SeekerRepositoryInterface;

@Controller 
@RestController
@RequestMapping("/seekerprofiles")
public class SeekerControllerClass {
	
	@Autowired 
	SeekerRepositoryInterface seekerRepo ;
	SeekerModelClass seekerModel ;
	
	
	@PostMapping("/newseekerprofile")
	public ResponseEntity<SeekerModelClass> postNewJobs(SeekerModelClass seekerModel ,@RequestParam("seekerId") Long seekerId , @RequestParam("seekerName") String seekerName , @RequestParam("seekerDegree") String seekerDegree ,@RequestParam("seekerSpecialization") String seekerSpecialization ,@RequestParam("seekerSkills") String seekerSkills,@RequestParam("seekerWorkExperience") long seekerWorkExperience ,@RequestParam("seekerOtherProfile") String seekerOtherProfile ,@RequestParam("seekerJobTitle") String seekerJobTitle ,@RequestParam("seekerJobType") String seekerJobType , ModelMap modelmap1)
	{
		modelmap1.put("seekerId",seekerId) ;
		modelmap1.put("seekerName",seekerName) ;
		modelmap1.put("seekerDegree",seekerDegree) ;
		modelmap1.put("seekerSpecialization",seekerSpecialization) ;
		modelmap1.put("seekerSkills",seekerSkills) ;
		modelmap1.put("seekerWorkExperience",seekerWorkExperience);
		modelmap1.put("seekerOtherProfile",seekerOtherProfile) ;
		modelmap1.put("seekerJobTitle",seekerJobTitle) ;
		modelmap1.put("seekerJobType",seekerJobType) ;
		return  ResponseEntity.ok(seekerModel)  ; 
		
	}
	
	@GetMapping("/viewseekerprofile") 
	public SeekerModelClass viewPrevProfiles(SeekerModelClass seekerModel)
	{
		  seekerRepo.save(seekerModel) ;
		  return seekerModel ;
	}
	
	@GetMapping("/viewseekerprofileresponse")
	public ResponseEntity<Optional<SeekerModelClass>> getProfilesById(@PathVariable Long seekerId)
	{
		 Optional<SeekerModelClass> seekerModel = seekerRepo.findById(seekerId) ; 
		 return ResponseEntity.ok(seekerModel) ;
	}
	
	
	@PutMapping("/updateseekerprofile") 
	public SeekerModelClass updateSeekerProfiles(SeekerModelClass seekerModel)
	{
		seekerRepo.save(seekerModel) ;
		return seekerModel ;
	}
	
	@PutMapping("/updateseekerprofileresponse")
	public ResponseEntity<SeekerModelClass> updateJobPostsReturn(@PathVariable Long seekerId, SeekerModelClass seekerModelUpdated)
	{
		 Optional<SeekerModelClass> seekerModel = seekerRepo.findById(seekerId) ;
		 seekerModelUpdated.setSeekerName(seekerModelUpdated.getSeekerName()) ;
		 seekerModelUpdated.setSeekerDegree(seekerModelUpdated.getSeekerDegree()) ;
		 seekerModelUpdated.setSeekerSpecialization(seekerModelUpdated.getSeekerSpecialization()) ;
		 seekerModelUpdated.setSeekerSkills(seekerModelUpdated.getSeekerSkills()) ;
		 seekerModelUpdated.setSeekerWorkExperience(seekerModelUpdated.getSeekerWorkExperience()) ;
		 seekerModelUpdated.setSeekerOtherProfile(seekerModelUpdated.getSeekerOtherProfile()) ;
		 seekerModelUpdated.setSeekerJobType(seekerModelUpdated.getSeekerJobType()) ;
		 seekerModelUpdated.setSeekerJobTitle(seekerModelUpdated.getSeekerJobTitle()) ;
		 SeekerModelClass newSeekerModel = seekerRepo.save(seekerModelUpdated) ;
		 return ResponseEntity.ok(newSeekerModel) ;
	}
	
	@DeleteMapping("/deleteseekerprofile") 
	public SeekerModelClass deleteSeekerProfile(@PathVariable("seekerId") Long  seekerId)
	{
		  seekerRepo.deleteById(seekerId) ;
		  seekerRepo.save(seekerModel) ;
		 return seekerModel; 
	}
	
	@DeleteMapping("/deleteseekerprofileresponse")
	public ResponseEntity<Optional<SeekerModelClass>>  deleteSeekerProfileResponse(@PathVariable Long seekerId)
	{
		Optional<SeekerModelClass> seekerModel = seekerRepo.findById(seekerId) ;
	     seekerRepo.deleteById(seekerId);
	    return ResponseEntity.ok(seekerModel) ;
	}
	

}