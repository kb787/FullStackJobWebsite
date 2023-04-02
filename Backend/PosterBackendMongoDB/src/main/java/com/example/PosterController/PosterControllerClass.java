package com.example.PosterController;

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

import com.example.PosterModel.PosterModelClass;
import com.example.PosterRepository.PosterRepositoryInterface;

@Controller 
@RestController
@RequestMapping("/jobposts")
public class PosterControllerClass {
	
	@Autowired 
	PosterRepositoryInterface posterRepo ;
	PosterModelClass posterModel ;
	
	@PostMapping("/newjobposts")
	public String postNewJobs(@RequestParam("posterId") Long posterId , @RequestParam("compName") String compName , @RequestParam("vaccancies") double vaccancies ,@RequestParam("perName") String perName ,@RequestParam("perContactNo") String perContactNo,@RequestParam("empRole") String empRole ,@RequestParam("empSalary") String empSalary ,@RequestParam("empJobType") String empJobType , ModelMap modelmap)
	{
		modelmap.put("posterId",posterId) ;
		modelmap.put("compName",compName) ;
		modelmap.put("vaccancies",vaccancies) ;
		modelmap.put("perName",perName) ;
		modelmap.put("perContactNo",perContactNo) ;
		modelmap.put("empRole",empRole);
		modelmap.put("empSalary",empSalary) ;
		modelmap.put("empJobType",empJobType) ;
		
		return "Successfully added values"+posterId+compName+vaccancies+perName+perContactNo+empRole+empSalary+empJobType   ; 
		
	}
	
	@GetMapping("/viewjobpost") 
	public PosterModelClass viewJobPosts(PosterModelClass posterModel)
	{
		  posterRepo.save(posterModel) ;
		  return posterModel ;
	}
	
	@GetMapping("/viewjobpostresponse")
	public ResponseEntity<Optional<PosterModelClass>> getPostsById(@PathVariable Long posterId)
	{
		 Optional<PosterModelClass> posterModel = posterRepo.findById(posterId) ; 
		 return ResponseEntity.ok(posterModel) ;
	}
	
	
	@PutMapping("/updatejobposts") 
	public PosterModelClass updateJobPosts(PosterModelClass posterModel)
	{
		posterRepo.save(posterModel) ;
		return posterModel ;
	}
	
	@PutMapping("/updatejobpostsresponse")
	public ResponseEntity<PosterModelClass> updateJobPostsReturn(@PathVariable Long posterId, PosterModelClass posterModelUpdated)
	{
		 Optional<PosterModelClass> posterModel = posterRepo.findById(posterId) ;
		 posterModelUpdated.setCompName(posterModelUpdated.getCompName()) ;
		 posterModelUpdated.setVaccancies(posterModelUpdated.getVaccancies()) ;
		 posterModelUpdated.setPerName(posterModelUpdated.getPerName()) ;
		 posterModelUpdated.setPerContactNo(posterModelUpdated.getPerContactNo()) ;
		 posterModelUpdated.setEmpRole(posterModelUpdated.getEmpRole()) ;
		 posterModelUpdated.setEmpSalary(posterModelUpdated.getEmpSalary()) ;
		 posterModelUpdated.setEmpJobType(posterModelUpdated.getEmpJobType()) ;
		 PosterModelClass newPosterModel = posterRepo.save(posterModelUpdated) ;
		 return ResponseEntity.ok(newPosterModel) ;
	}
	
	@DeleteMapping("/deletejobposts") 
	public PosterModelClass deleteJobPosts(@PathVariable("posterId") Long  posterId)
	{
		 posterRepo.deleteById(posterId) ;
		 posterRepo.save(posterModel) ;
		 return posterModel; 
	}
	
	@DeleteMapping("/deletejobpostsresponse")
	public ResponseEntity<Optional<PosterModelClass>>  deleteJobPostsResponse(@PathVariable Long posterId)
	{
		Optional<PosterModelClass> posterModel = posterRepo.findById(posterId) ;
		posterRepo.deleteById(posterId);
	    return ResponseEntity.ok(posterModel) ;
	}
	

}
