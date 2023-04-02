package com.example.PosterModel;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="posters")
public class PosterModelClass {
	
	private long posterId ;
	private String compName ;
	private double vaccancies ;
	private String perName ;
	private double perContactNo ;
	private String empRole ;
	private double empSalary ;
	private String empJobType ;

	public long getPosterId() {
		return posterId;
	}
	public void setPosterId(long posterId) {
		this.posterId = posterId;
	}
	public String getCompName() {
		return compName;
	}
	public void setCompName(String compName) {
		this.compName = compName;
	}
	public double getVaccancies() {
		return vaccancies;
	}
	public void setVaccancies(double vaccancies) {
		this.vaccancies = vaccancies;
	}
	public String getPerName() {
		return perName;
	}
	public void setPerName(String perName) {
		this.perName = perName;
	}
	public double getPerContactNo() {
		return perContactNo;
	}
	public void setPerContactNo(double perContactNo) {
		this.perContactNo = perContactNo;
	}
	public String getEmpRole() {
		return empRole;
	}
	public void setEmpRole(String empRole) {
		this.empRole = empRole;
	}
	public double getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(double empSalary) {
		this.empSalary = empSalary;
	}
	public String getEmpJobType() {
		return empJobType;
	}
	public void setEmpJobType(String empJobType) {
		this.empJobType = empJobType;
	}
	
	public PosterModelClass(long posterId, String compName, double vaccancies, String perName, double perContactNo,
			String empRole, double empSalary, String empJobType) {
		super();
		this.posterId = posterId;
		this.compName = compName;
		this.vaccancies = vaccancies;
		this.perName = perName;
		this.perContactNo = perContactNo;
		this.empRole = empRole;
		this.empSalary = empSalary;
		this.empJobType = empJobType;
	}
	@Override
	public String toString() {
		return "PosterModelClass [posterId=" + posterId + ", compName=" + compName + ", vaccancies=" + vaccancies
				+ ", perName=" + perName + ", perContactNo=" + perContactNo + ", empRole=" + empRole + ", empSalary="
				+ empSalary + ", empJobType=" + empJobType + "]";
	}
	
	

	
	
	
	
 
}
