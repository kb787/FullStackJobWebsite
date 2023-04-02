package com.example.SeekerModel;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "seekers")
public class SeekerModelClass {
	
	private long seekerId ;
	private String seekerName ;
	private String seekerDegree ;
	private String seekerSpecialization ;
	private String seekerSkills ;
	private long seekerWorkExperience ;
	private String seekerOtherProfile ;
	private String seekerJobTitle ;
	private String seekerJobType ;
	public long getSeekerId() {
		return seekerId;
	}
	public void setSeekerId(long seekerId) {
		this.seekerId = seekerId;
	}
	public String getSeekerName() {
		return seekerName;
	}
	public void setSeekerName(String seekerName) {
		this.seekerName = seekerName;
	}
	public String getSeekerDegree() {
		return seekerDegree;
	}
	public void setSeekerDegree(String seekerDegree) {
		this.seekerDegree = seekerDegree;
	}
	public String getSeekerSpecialization() {
		return seekerSpecialization;
	}
	public void setSeekerSpecialization(String seekerSpecialization) {
		this.seekerSpecialization = seekerSpecialization;
	}
	public String getSeekerSkills() {
		return seekerSkills;
	}
	public void setSeekerSkills(String seekerSkills) {
		this.seekerSkills = seekerSkills;
	}
	public long getSeekerWorkExperience() {
		return seekerWorkExperience;
	}
	public void setSeekerWorkExperience(long seekerWorkExperience) {
		this.seekerWorkExperience = seekerWorkExperience;
	}
	public String getSeekerOtherProfile() {
		return seekerOtherProfile;
	}
	public void setSeekerOtherProfile(String seekerOtherProfile) {
		this.seekerOtherProfile = seekerOtherProfile;
	}
	public String getSeekerJobTitle() {
		return seekerJobTitle;
	}
	public void setSeekerJobTitle(String seekerJobTitle) {
		this.seekerJobTitle = seekerJobTitle;
	}
	public String getSeekerJobType() {
		return seekerJobType;
	}
	public void setSeekerJobType(String seekerJobType) {
		this.seekerJobType = seekerJobType;
	}
	
	public SeekerModelClass(long seekerId, String seekerName, String seekerDegree, String seekerSpecialization,
			String seekerSkills, long seekerWorkExperience, String seekerOtherProfile, String seekerJobTitle,
			String seekerJobType) {
		super();
		this.seekerId = seekerId;
		this.seekerName = seekerName;
		this.seekerDegree = seekerDegree;
		this.seekerSpecialization = seekerSpecialization;
		this.seekerSkills = seekerSkills;
		this.seekerWorkExperience = seekerWorkExperience;
		this.seekerOtherProfile = seekerOtherProfile;
		this.seekerJobTitle = seekerJobTitle;
		this.seekerJobType = seekerJobType;
	}
	@Override
	public String toString() {
		return "SeekerModelClass [seekerId=" + seekerId + ", seekerName=" + seekerName + ", seekerDegree="
				+ seekerDegree + ", seekerSpecialization=" + seekerSpecialization + ", seekerSkills=" + seekerSkills
				+ ", seekerWorkExperience=" + seekerWorkExperience + ", seekerOtherProfile=" + seekerOtherProfile
				+ ", seekerJobTitle=" + seekerJobTitle + ", seekerJobType=" + seekerJobType + "]";
	}
	
	
	

}
